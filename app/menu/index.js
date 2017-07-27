import { app, Menu, shell, BrowserWindow } from 'electron';
import devMenuTemplate from './Dev.js';
import editMenuTemplate from './Edit.js';

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow = BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
		let template = this.buildDarwinTemplate();
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    return menu;
  }

  buildDarwinTemplate() {
    return [
      devMenuTemplate,
      editMenuTemplate
    ];
  }

}