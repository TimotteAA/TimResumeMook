const path = require('path');
const { BrowserWindow, app } = require('electron');

function isDev() {
  return process.env.NODE_ENV === 'development';
}

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
});
