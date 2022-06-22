const path = require('path');
const { BrowserWindow, app, ipcMain, dialog } = require('electron');

function isDev() {
  return process.env.NODE_ENV === 'development';
}

const ROOT_PATH = path.join(app.getAppPath(), '../');

// function createWindow() {
//   // 创建主应用窗口
//   const mainWindow = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     webPreferences: {
//       devTools: true,
//       nodeIntegration: true,
//       preload: path.join(__dirname, './preload.js'),
//     },
//   });

//   // 创建应用设置窗口
//   const settingWindow = new BrowserWindow({
//     width: 720,
//     height: 240,
//     resizable: false,
//     webPreferences: {
//       devTools: true,
//       nodeIntegration: true,
//       preload: path.join(__dirname, './preload.js'),
//     },
//   });

//   if (isDev()) {
//     mainWindow.loadURL(`http://127.0.0.1:9000`);
//     settingWindow.loadURL(`http://127.0.0.1:9000/setting.html`);
//   } else {
//     mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
//     settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
//   }
// }

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
});
