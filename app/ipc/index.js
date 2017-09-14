import fs from 'fs-extra';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

import prettyBytes from 'pretty-bytes';


const imageMinPlugins = [ imageminJpegtran(), imageminPngquant({quality: '65-80'})];

export default class ipcHandler {

  constructor(props, context) {
    this.optimize = this.optimize.bind(this);
    this.optimizeFile = this.optimizeFile.bind(this);
    this.millisToMinutesAndSeconds = this.millisToMinutesAndSeconds.bind(this);
  }

  async millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "." + (seconds < 10 ? '0' : '') + seconds;
  }

  async optimize(event, files) {

    let totalOriginalSize = [];
    let totalOptimizedSize = [];

    const startTime = new Date();

    // Runs file optimizations in parallel
    // Stackoverflow:- https://goo.gl/wGdkog
    await Promise.all(files.map(async (file) => {
      const {status, originalSize, optimizedSize} = await this.optimizeFile(file);
      if (status) {
        totalOriginalSize.push(originalSize);
        totalOptimizedSize.push(optimizedSize);
      }
    }));

    const originalSize = totalOriginalSize.reduce( (acc, num) => acc + num );
    const optimizedSize = totalOptimizedSize.reduce( (acc, num) => acc + num );
    const saved = originalSize - optimizedSize;
    const percent = originalSize > 0 ? (saved / originalSize) * 100 : 0;
    const zeroSum = saved > 0 ? false : true;

    const endTime = new Date() - startTime;

    const deltaPerct = percent.toFixed(1).replace(/\.0$/, '');
    const deltaTime = await this.millisToMinutesAndSeconds(endTime);
    const deltaBytes = prettyBytes(saved);

    console.log(`✔ Saved ${deltaBytes}. ${deltaPerct}% ↓ in ${deltaTime}`);

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