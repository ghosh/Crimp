import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import Title from './components/Title';
import Button from './components/Button';
import Loader from './components/Loader';
import { Report, ReportSummary, ReportList } from './components/Report';
import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from './components/Widget';
import { DropzoneIcons, DropzoneTitle, DropzoneSubtitle, DropzoneStyles } from './components/Dropzone';

const READY = 'READY';
const OPTIMIZING = 'OPTIMIZING';
const REPORTING = 'REPORTING';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.onDrop = this.onDrop.bind(this);
    this.onConversion = this.onConversion.bind(this);
    this.state = {
      status: READY,
      delta: null,
      files: null
    };
  }

  componentDidMount() {
    ipcRenderer.on('files:optimized', this.onConversion);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('files:optimized', this.onConversion);
  }

  shouldComponentUpdate() {
    return true;
  }

  onConversion(event, fileData, delta) {
    console.log(fileData, delta);
    this.setState({
      status: REPORTING,
      delta: delta,
      files: fileData
    });
  }

  onDrop(acceptedFiles) {
    if (acceptedFiles.length < 1) return;
    const filePaths = acceptedFiles.map( file => file.path );
    console.log(filePaths);
    ipcRenderer.send('files:submit', filePaths);
    this.setState({ status: OPTIMIZING });
  }

  render() {

    let dropzoneRef;

    return (
      <Widget>
        <WidgetHeader>
          <Title>
            Drop files to optimize
          </Title>
        </WidgetHeader>
        <WidgetBody>
          {this.state.status === OPTIMIZING ? (
            <Loader>
              <p>Optimizing...</p>
            </Loader>
          ) : ''}

          {this.state.status === REPORTING ? (
            <Report>
              <ReportSummary
                deltaPerct={ this.state.delta.deltaPerct }
                deltaBytes={ this.state.delta.deltaBytes }
              />
              <ReportList files={ this.state.files } />
            </Report>
          ) : ''}

          {this.state.status === READY ? (
            <Dropzone
              onDrop={this.onDrop}
              ref={(node) => { dropzoneRef = node; }}
              accept="image/jpeg, image/png, image/gif, .svg"
              style={ DropzoneStyles.dropzone }
              activeStyle={ DropzoneStyles.active }
              rejectStyle={ DropzoneStyles.reject }
            >
              {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                if (isDragReject) return (
                  <div>
                    <DropzoneIcons disabled={true} hover={true} />
                    <DropzoneTitle>Only .png, .jpg, .gif and .svg files allowed</DropzoneTitle>
                  </div>
                );
                if (isDragActive) return (
                  <div>
                    <DropzoneIcons hover={true} />
                    <DropzoneTitle>Drop file(s) to start optimization</DropzoneTitle>
                  </div>
                );
                return (
                  <div>
                    <DropzoneIcons />
                    <DropzoneTitle>Drop files here to optimize</DropzoneTitle>
                    <DropzoneSubtitle>.jpg, .png, .gif and .svg accepted</DropzoneSubtitle>
                  </div>
                );
              }}
            </Dropzone>
          ) : ''}

        </WidgetBody>
        <WidgetFooter>

          {this.state.status === READY ? (
            <Button onClick={() => dropzoneRef.open()} >
              Select Files
            </Button>
          ) : ''}

          {this.state.status === OPTIMIZING ? (
            <Button disabled={true} >
              Optimizing...
            </Button>
          ) : ''}

          {this.state.status === REPORTING ? (
            <Button onClick={() => this.setState({ status: READY })} >
              Reset
            </Button>
          ) : ''}

        </WidgetFooter>
      </Widget>
    );
  }
}

export default App;
