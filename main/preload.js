const { contextBridge, ipcRenderer, shell } = require('electron');
const { resolve, join } = require('path');
// const fs = require('fs');
const fs = require('fs');

// 告知主进程从store中获取数据
contextBridge.exposeInMainWorld('getResumeData', {
  // 主进程接收get-resume-data的事件，然后发送onReplyResumeData事件
  onGetResumeData() {
    ipcRenderer.send('get-resume-data', '');
  },
  onReplyResumeData: () => {
    return new Promise((resolve) => {
      ipcRenderer.on('reply-resume-data', (_, arg) => {
        if (arg) {
          resolve(arg);
        }
      });
    });
  },
});

// 告知主进程从store中设置数据
contextBridge.exposeInMainWorld('setResumeData', {
  onSetResumeData(data) {
    ipcRenderer.send('set-resume-data', data);
  },
});

// 告知主线程打印
contextBridge.exposeInMainWorld('exportSelectionToPDF', {
  sendExportSelectionToPDF(data) {
    ipcRenderer.send('exportSelectionToPDF', data);
  },
});

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer,
  shell,
  resolve,
  join,
  fsPromises: fs.promises,
  fs,
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
