const { contextBridge, ipcRenderer, shell } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer,
  shell,
});

contextBridge.exposeInMainWorld('ipcRenderApi', {
  onReplyRootPath: (handler) => {
    ipcRenderer.on('reply-root-path', (_, ...args) => {
      handler(...args);
    });
  },
});
