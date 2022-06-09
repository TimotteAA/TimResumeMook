import Electron from 'electron';

declare global {
  interface Window {
    electron: {
      ipcRenderer: Electron.IpcRenderer;
      shell: Electron.Shell;
      getAppPath: typeof Electron.app.getAppPath;
    };
    ipcRenderApi: {
      onReplyRootPath: (handler: (path: string) => void) => void;
    };
  }
}

export {};
