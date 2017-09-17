import { Notification } from 'electron';

import plur from 'plur';
import fs from 'fs-extra';
import imagemin from 'imagemin';
import prettyBytes from 'pretty-bytes';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';


const imageMinPlugins = [
  imageminJpegtran(),
  imageminPngquant({quality: '65-80'}),
  imageminGifsicle({optimizationLevel: 2})
];

export default class ipcHandler {

  constructor(props, context) {
    this.notify = this.notify.bind(this);
    this.optimize = this.optimize.bind(this);
    this.msToHuman = this.msToHuman.bind(this);
    this.processData = this.processData.bind(this);
    this.optimizeFile = this.optimizeFile.bind(this);
  }


  async msToHuman(ms) {
    const hours = Math.floor(ms / 3600000); // 1 Hour = 36000 Milliseconds
    const minutes = Math.floor((ms % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
    const seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds

    if ( seconds == '0' ) return `${ms}ms`;
    return (minutes > 60000) ? `${minutes}m ${seconds}s` : `${seconds} seconds`;
  }


  async processData(totalOriginalSize, totalOptimizedSize) {
    const originalSize = totalOriginalSize.reduce( (acc, num) => acc + num );
    const optimizedSize = totalOptimizedSize.reduce( (acc, num) => acc + num );
    const saved = originalSize - optimizedSize;
    const percent = originalSize > 0 ? (saved / originalSize) * 100 : 0;
    const zeroSum = saved > 0 ? false : true;

    const deltaPerct = percent.toFixed(1).replace(/\.0$/, '');
    const deltaBytes = prettyBytes(saved);

    return { deltaPerct, deltaBytes };
  }


  async notify({numFiles, timeTaken, bytesSaved, perctSaved, imagePath}) {

    const notification = new Notification({
      title: `${numFiles} ${plur('file', numFiles)} optimizated`,
      subtitle: `Saved ${bytesSaved}, thats a ${perctSaved}% ↓ in size`,
      body: `Processed in ${timeTaken}`,
      icon: imagePath
    })
    notification.show();
  }


  async optimize(event, files) {
    const startTime = new Date();
    let totalOriginalSize = [];
    let totalOptimizedSize = [];

    // Runs file optimizations in parallel
    // Stackoverflow:- https://goo.gl/wGdkog
    await Promise.all(files.map(async (file) => {
      const {status, originalSize, optimizedSize} = await this.optimizeFile(file);
      if (status) {
        totalOriginalSize.push(originalSize);
        totalOptimizedSize.push(optimizedSize);
      }
    }));

    const { deltaPerct, deltaBytes } = await this.processData(totalOriginalSize, totalOptimizedSize);
    const deltaTime = await this.msToHuman( new Date() - startTime );

    this.notify({
      numFiles: files.length,
      timeTaken: deltaTime,
      bytesSaved: deltaBytes,
      perctSaved: deltaPerct,
      imagePath: files[0]
    })

    console.log(`Saved ${deltaBytes}, thats a ${deltaPerct}% ↓ in size`);
    event.sender.send('files:optimized', true);
  }


  /**
   * Optimizes individual image files and returns
   * compression data.
   * @param  {[type]} path Absolute path to the file
   * @return {object} Status object of conversion
   */
  async optimizeFile(path) {
    try {
      const originalBuffer = await fs.readFile(path);
      const optimizedBuffer = await imagemin.buffer(originalBuffer, { plugins: imageMinPlugins });
      await fs.writeFile(path, optimizedBuffer);

      return {
        status: true,
        originalSize: originalBuffer.length,
        optimizedSize: optimizedBuffer.length
      }

    } catch (error) {
      return { status: false, originalSize: null, optimizedSize: null }
      console.error('Error: ', error);
    }
  }

}