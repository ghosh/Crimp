import { app, Menu, shell, BrowserWindow } from 'electron';
import aboutMenuTemplate from './About.js';
import devMenuTemplate from './Dev.js';
import helpMenuTemplate from './Help.js';
import windowMenuTemplate from './Window.js';

export default class MenuBuilder {
  constructor(mainWindow = BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu(isDevMode) {
		let menuTemplate = this.buildMenuTemplate();
    if (isDevMode) menuTemplate.push(devMenuTemplate);
    const menu = Menu.buildFromTemplate(menuTemplate);

    Menu.setApplicationMenu(menu);
    return menu;
  }

  buildMenuTemplate() {
    return [
      aboutMenuTemplate,
      windowMenuTemplate,
      helpMenuTemplate
    ];
  }

}