import electron from 'electron';

export default {
  label: 'Help',
  submenu: [
    { label: 'Crimp Website', click: () => electron.shell.openExternal('https://crimp.now.sh') },
    { type: 'separator' },
    { label: 'Report Issue', click: () => electron.shell.openExternal('https://github.com/Ghosh/crimp/issues') },
    { label: 'Suggest Feature', click: () => electron.shell.openExternal('https://github.com/Ghosh/crimp/issues') }
  ],
};