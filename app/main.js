import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import url from 'url'
import fs from 'fs';

import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

import MenuBuilder from './menu';

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

let mainWindow;

const createWindow  = () => {
  mainWindow = new BrowserWindow({
    title: 'Webpfy',
    width: 300,
    height: 422,
    titleBarStyle: 'hidden',
    maximizable: false,
    resizable: false,
    acceptFirstMouse: true,
    frame: false,
    // vibrancy: 'dark',
    icon: path.join(__dirname, '/assets/Webpfy.icns')
  })

  const urlFormat = {
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  }

  const startUrl = process.env.ELECTRON_START_URL || url.format(urlFormat);

  mainWindow.loadURL(startUrl);
  mainWindow.on('closed', () => mainWindow = null );

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Make sure you have the FULL path here or it won't work
  BrowserWindow.addDevToolsExtension(
    '/Users/ghosh/Library/Application Support/Google/Chrome/' +
    'default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.0_0'
  );

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

ipcMain.on('file:submit', (event, path) => {
  console.log('File received: ', path)


const buff = fs.readFile(path, function (err, data) {
  if (err) throw err;
  console.log('Data: ', data);

  imagemin.buffer(data, {
      plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '65-80'})
      ]
    })
    .then(buffer => {
      console.log('Minimized Buffer:', buffer)
      var stream = fs.createWriteStream(path);
      stream.write(buffer);
      stream.end();
      stream.on('finish', () => {
        console.log("The file was saved!");
      });
      stream.on('error', (error) => {
        console.log('Error', error);
      });
    })
    .catch(error => console.log('Error', error));
  });

});