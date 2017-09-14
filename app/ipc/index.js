import fs from 'fs-extra';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

import prettyBytes from 'pretty-bytes';


export default class ipcHandler {

  constructor(props, context) {
    this.optimize = this.optimize.bind(this);
    this.optimizeFiles = this.optimizeFiles.bind(this);
  }

  async optimize() {
    console.log('Call me');
  }

  async optimizeFiles(event, path) {
    try {
      const originalBuffer = await fs.readFile(path);
      const optimizedBuffer = await imagemin.buffer(originalBuffer, { plugins: [ imageminJpegtran(), imageminPngquant({quality: '65-80'})] });
      await fs.writeFile(path, optimizedBuffer);
      event.sender.send('file:optimized', true, path);
      console.log('File optimized!');
      this.optimize();
    } catch (error) {
      console.error('Error: ', error);
      event.sender.send('file:optimized', false);
    }
  }

}