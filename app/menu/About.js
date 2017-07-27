import { app } from 'electron';

export default {
  label: 'Webpfy',
  submenu: [
    {
      label: 'About ' + 'Webpfy',
      role: 'about'
    },
    {
      type: 'separator'
    },
    {
      label: 'Services',
      role: 'services',
      submenu: []
    },
    {
      type: 'separator'
    },
    {
      label: 'Hide ' + 'Webpfy',
      accelerator: 'Command+H',
      role: 'hide'
    },
    {
      label: 'Hide Others',
      accelerator: 'Command+Shift+H',
      role: 'hideothers'
    },
    {
      label: 'Show All',
      role: 'unhide'
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: function() { app.quit(); }
    },
  ]
}