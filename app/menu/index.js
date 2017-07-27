import { app, Menu, shell, BrowserWindow } from 'electron';
import aboutMenuTemplate from './About.js';
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
      aboutMenuTemplate,
      editMenuTemplate,
      devMenuTemplate,
    ];
  }

}