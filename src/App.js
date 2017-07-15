import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

import Title from './components/Title';
import Button from './components/Button';
import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from './components/Widget';
import { DropzoneTitle, DropzoneSubtitle, DropzoneStyles } from './components/Dropzone';

class App extends Component {

  shouldComponentUpdate() {
    return false;
  }

  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
        console.log(file.path);
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
          <Dropzone
            onDrop={this.onDrop.bind(this)}
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
        </WidgetBody>
        <WidgetFooter>
          <Button onClick={() => { dropzoneRef.open() }} >
            Select Files
          </Button>
        </WidgetFooter>
      </Widget>
    );
  }
}

export default App;
