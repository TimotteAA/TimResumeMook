const path = require('path');
const { BrowserWindow, app, ipcMain, dialog, shell } = require('electron');
const Store = require('electron-store');
const fs = require('fs');

const resumeStore = new Store({ name: 'resumeStore' });

function isDev() {
  return process.env.NODE_ENV === 'development';
}

const ROOT_PATH = path.join(app.getAppPath(), '../');

function createMainWindow() {
  // 创建主应用窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js'),
    },
  });

  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:9000`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

function createSettingWindow() {
  // 创建应用设置窗口
  const settingWindow = new BrowserWindow({
    width: 720,
    height: 360,
    resizable: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js'),
    },
  });

  if (isDev()) {
    settingWindow.loadURL(`http://127.0.0.1:9000/setting.html`);
  } else {
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }
}

app.whenReady().then(() => {
  createMainWindow();
  // createSettingWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });

  ipcMain.on('get-root-path', (event) => {
    event.reply('reply-root-path', ROOT_PATH);
  });

  ipcMain.on('open-setting-window', () => {
    createSettingWindow();
    console.log(1234);
  });

  ipcMain.on('open-save-resume-path', (e) => {
    dialog
      .showOpenDialog({
        properties: ['openDirectory'],
      })
      .then((result) => {
        e.reply('reply-save-resume-path', result.filePaths);
      })
      .catch((err) => {
        e.reply('reply-save-resume-path', err);
      });
  });

  ipcMain.on('get-resume-data', (e) => {
    const resumeData = resumeStore.get('resume');
    e.reply('reply-resume-data', resumeData || {});
  });

  ipcMain.on('set-resume-data', (_, arg) => {
    if (arg) {
      resumeStore.set('resume', arg);
    }
  });

  ipcMain.on('exportSelectionToPDF', (e, arg) => {
    let window = BrowserWindow.fromWebContents(e.sender);
    console.log(arg);
    window.webContents.printToPDF({ printSelectionOnly: true, printBackground: true, landscape: true }).then((data) => {
      // Use the data however you like :)
      console.log(data);
      // data是pdf
      console.log(arg);
      fs.writeFile(arg, data, function (error) {
        if (error) {
          throw error;
        }
        shell.openExternal('file://' + arg);
        // e.sender.send('wrote-pdf', pdfPath)
      });
    });
  });
});
