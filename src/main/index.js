import { app, BrowserWindow, ipcMain } from 'electron';
import { enableLiveReload } from 'electron-compile';

import MenuBuilder from './menu';
import FilesHandler from './ipc';

let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({strategy: 'react-hmr'});

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    title: 'Crimp',
    width: 300,
    height: 422,
    titleBarStyle: 'hidden',
    maximizable: false,
    resizable: false,
    acceptFirstMouse: true,
    frame: false,
    backgroundColor: '#141e2a',
    show: false
    // vibrancy: 'dark',
    // icon: path.join(__dirname, '/assets/Crimp.icns')
  })

  mainWindow.loadURL(`file://${__dirname}/../app/index.html`);

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();


  if (isDevMode) {
    BrowserWindow.addDevToolsExtension(
      '/Users/ghosh/Library/Application Support/Google/Chrome/' +
      'default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.1_0'
    );
  }

   mainWindow.once('ready-to-show', () => {
      mainWindow.show()
   })

  mainWindow.on('closed', () => mainWindow = null );
};

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

const filesHandler = new FilesHandler();
ipcMain.on('files:submit', filesHandler.optimize);
