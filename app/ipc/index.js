import fs from 'fs';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';


export default class ipcHandler {

  optimizeFiles(event, path) {
    const buff = fs.readFile(path, function (err, data) {
      if (err) throw err;
      imagemin.buffer(data, {
        plugins: [
          imageminJpegtran(),
          imageminPngquant({quality: '65-80'})
        ]
      })
      .then(buffer => {
        fs.writeFile(path, buffer, function(err) {
          if (err) { return console.log(err); }
          console.log("The file was saved!");
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

  // optimize(event, path) {

  // }

}