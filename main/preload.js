const { contextBridge, ipcRenderer, shell } = require('electron');
const { resolve } = require('path');
// const fs = require('fs');
const fs = require('fs');
const Store = require('electron-store');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer,
  shell,
  resolve,
  fsPromises: fs.promises,
  fs,
  store: new Store({ name: 'resumeData' }),
});

contextBridge.exposeInMainWorld('ipcRenderApi', {
  onReplyRootPath: (handler) => {
    ipcRenderer.on('reply-root-path', (_, ...args) => {
      handler(...args);
    });
  },
});

// 告知主进程打开
contextBridge.exposeInMainWorld('openSettingWindow', {
  onOpenSettingWindow: () => {
    ipcRenderer.send('open-setting-window', '');
  },
});

// 让主进程打开dialog选择存储路径
contextBridge.exposeInMainWorld('openSaveResumePath', {
  onOpenSaveResumePath: () => {
    ipcRenderer.send('open-save-resume-path', '');
  },
});

// 主进程告知渲染进程用户选择的保存路径
contextBridge.exposeInMainWorld('replySaveResumePath', {
  onReplySaveResumePath: (setResumeSavePath) => {
    ipcRenderer.on('reply-save-resume-path', (_, args) => {
      if (args) {
        if (args.length > 0) {
          setResumeSavePath(args[0]);
        } else {
          console.log('失败啦！');
        }
      }
    });
  },
});
