import Electron from 'electron';
import fs from 'fs';
import Store from 'electron-store';

declare global {
  interface Window {
    electron: {
      ipcRenderer: Electron.IpcRenderer;
      shell: Electron.Shell;
      getAppPath: typeof Electron.app.getAppPath;
      resolve: Function;
      fsPromises: typeof fs.promises;
      fs: typeof fs;
      store: Store;
    };
    ipcRenderApi: {
      onReplyRootPath: (handler: (path: string) => void) => void;
    };
    openSaveResumePath: {
      onOpenSaveResumePath: Function;
    };
    replySaveResumePath: {
      onReplySaveResumePath: Function;
    };
    openSettingWindow: {
      onOpenSettingWindow: Function;
    };
  }
}

export {};
