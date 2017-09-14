import fs from 'fs';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

import prettyBytes from 'pretty-bytes';


export default class ipcHandler {

  optimizeFiles(event, path) {

    let originalSize;
    let optimizedSize;

    fs.readFile(path, function (err, data) {
      if (err) throw err;

      originalSize = data.length;
      // console.log('Before: ', prettyBytes(data.length));

      imagemin.buffer(data, {
        plugins: [
          imageminJpegtran(),
          imageminPngquant({quality: '65-80'})
        ]
      })
      .then(buffer => {

        optimizedSize = buffer.length;
        const saved = originalSize - optimizedSize;
        const percent = originalSize > 0 ? (saved / originalSize) * 100 : 0;
        const alreadyOptimized = (saved < 0) ? true : false;

        fs.writeFile(path, buffer, function(err) {
          if (err) { return console.log(err); }
          console.log("The file was saved!");
          console.log( prettyBytes(originalSize), prettyBytes(optimizedSize), saved, percent );
          event.sender.send('file:optimized', true, path);
          return true;
        });
      })
      .catch(error => {
        console.log('Error', error);
        event.sender.send('file:optimized', false);
        return false;
      });
    });
  }

}