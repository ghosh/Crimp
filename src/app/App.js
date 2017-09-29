import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import Title from './components/Title';
import Button from './components/Button';
import Busy from './components/Busy';
import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from './components/Widget';
import { DropzoneIcons, DropzoneTitle, DropzoneSubtitle, DropzoneStyles } from './components/Dropzone';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.onDrop = this.onDrop.bind(this);
    this.onConversion = this.onConversion.bind(this);
    this.state = { isOptimizing: false };
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

  onConversion(event, status) {
    this.setState({ isOptimizing: false });
  }

  onDrop(acceptedFiles) {
    if (acceptedFiles.length < 1) return;
    const filePaths = acceptedFiles.map( file => file.path );
    ipcRenderer.send('files:submit', filePaths);
    this.setState({ isOptimizing: true });
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
          {this.state.isOptimizing ? (
            <Busy>
              <p>Optimizing...</p>
            </Busy>
          ) : (
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
                  <DropzoneTitle>Only .png, .jpg, .gif and .svg files allowed</DropzoneTitle>
                );
                if (isDragActive) return (
                  <DropzoneTitle>Drop file(s) to start optimization</DropzoneTitle>
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
          )}
        </WidgetBody>
        <WidgetFooter>
          <Button onClick={() => dropzoneRef.open()} >
            Select Files
          </Button>
        </WidgetFooter>
      </Widget>
    );
  }
}

export default App;
