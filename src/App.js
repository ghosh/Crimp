import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import Title from './components/Title';
import Button from './components/Button';
import Busy from './components/Busy';
import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from './components/Widget';
import { DropzoneTitle, DropzoneSubtitle, DropzoneStyles } from './components/Dropzone';

// Cannot import ipcRenderer directly without ejecting
const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.onDrop = this.onDrop.bind(this);
    this.onConversion = this.onConversion.bind(this);

    this.state = { isOptimizing: false };
  }

  componentDidMount() {
    ipcRenderer.on('file:optimized', this.onConversion);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('file:optimized', this.onConversion);
  }

  shouldComponentUpdate() {
    return true;
  }

  onConversion(event, status, path) {
    console.log('Done', event, status);
    console.log('Send Notification');
    this.setState({ isOptimizing: false });
  }

  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
      console.log(file.path);
      ipcRenderer.send('file:submit', file.path);
      this.setState({ isOptimizing: true });
    });
  }

  render() {

    let dropzoneRef;

    return (
      <Widget>
        <WidgetHeader>
            <Title>
              Convert images to webp
            </Title>
        </WidgetHeader>
        <WidgetBody>
          {this.state.isOptimizing ? (
            <Busy>
              <p>Converting...</p>
            </Busy>
          ) : (
            <Dropzone
              onDrop={this.onDrop}
              ref={(node) => { dropzoneRef = node; }}
              accept="image/jpeg, image/png"
              style={ DropzoneStyles.dropzone }
              activeStyle={ DropzoneStyles.active }
              rejectStyle={ DropzoneStyles.reject }
            >
              {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                if (isDragActive) return (
                  <DropzoneTitle>Drop file(s) to start conversion</DropzoneTitle>
                );
                if (isDragReject) return (
                  <DropzoneTitle>Only .png and .jpg files allowed</DropzoneTitle>
                );
                return (
                  <div>
                    <DropzoneTitle>Drop files here to convert</DropzoneTitle>
                    <DropzoneSubtitle>Only .jpg & .png files are allowed</DropzoneSubtitle>
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
