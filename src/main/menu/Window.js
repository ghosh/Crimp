export default {
  label: 'Window',
  submenu: [
    { label: 'Minimize', accelerator: 'Command+M', selector: 'performMiniaturize:' },
    { label: 'Zoom', accelerator: 'Alt+Command+Ctrl+M', selector: 'zoom:' },
    { type: 'separator' },
    { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' }
  ]
}