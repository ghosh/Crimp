const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

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
    vibrancy: 'dark',
    icon: path.join(__dirname, '/assets/Webpfy.icns')
  })

  const urlFormat = {
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  }

  const startUrl = process.env.ELECTRON_START_URL || url.format(urlFormat);

  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => mainWindow = null )
}


app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})