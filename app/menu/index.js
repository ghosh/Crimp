import { app, Menu, shell, BrowserWindow } from 'electron';
import devMenuTemplate from './Dev.js';
import editMenuTemplate from './Edit.js';

export default class MenuBuilder {

  constructor(mainWindow = BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {

		let menuTemplate = this.buildMenuTemplate();
    const menu = Menu.buildFromTemplate(menuTemplate);

    Menu.setApplicationMenu(menu);
    return menu;
  }

  buildMenuTemplate() {
    return [
      {
        label: 'Edit',
        submenu: [
          {role: 'undo'},
          {role: 'redo'},
          {type: 'separator'},
          {role: 'cut'},
          {role: 'copy'},
          {role: 'paste'},
          {role: 'pasteandmatchstyle'},
          {role: 'delete'},
          {role: 'selectall'}
        ]
      },
      {
        label: 'View',
        submenu: [
          {role: 'reload'},
          {role: 'forcereload'},
          {role: 'toggledevtools'},
          {type: 'separator'},
          {role: 'resetzoom'},
          {role: 'zoomin'},
          {role: 'zoomout'},
          {type: 'separator'},
          {role: 'togglefullscreen'}
        ]
      },
      {
        role: 'window',
        submenu: [
          {role: 'minimize'},
          {role: 'close'}
        ]
      },
    ];
  }

}