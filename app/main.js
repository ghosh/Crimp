import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import url from 'url'

import MenuBuilder from './menu';
import IpcHandler from './ipc';



require('electron-reload')(__dirname, {
  electron: require('${__dirname}/../../node_modules/electron')
})

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
    'default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.1_0'
  );

}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})


const ipcHandler = new IpcHandler();
ipcMain.on('files:submit', ipcHandler.optimize);