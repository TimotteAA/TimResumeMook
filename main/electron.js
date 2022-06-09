const path = require('path');
const { BrowserWindow, app, ipcMain } = require('electron');

function isDev() {
  return process.env.NODE_ENV === 'development';
}

const ROOT_PATH = path.join(app.getAppPath(), '../');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js'),
    },
  });
  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:9000');
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createMainWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });

  ipcMain.on('get-root-path', (event) => {
    event.reply('reply-root-path', ROOT_PATH);
  });
});
