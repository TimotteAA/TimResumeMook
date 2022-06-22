/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./main/electron.js ***!
  \**************************/


var path = __webpack_require__(/*! path */ "path");

var _require = __webpack_require__(/*! electron */ "electron"),
    BrowserWindow = _require.BrowserWindow,
    app = _require.app,
    ipcMain = _require.ipcMain,
    dialog = _require.dialog;

function isDev() {
  return "development" === 'development';
}

var ROOT_PATH = path.join(app.getAppPath(), '../'); // function createWindow() {
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
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    }
  });

  if (isDev()) {
    mainWindow.loadURL("http://127.0.0.1:9000");
  } else {
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../dist/index.html')));
  }
}

function createSettingWindow() {
  // 创建应用设置窗口
  var settingWindow = new BrowserWindow({
    width: 720,
    height: 360,
    resizable: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    }
  });

  if (isDev()) {
    settingWindow.loadURL("http://127.0.0.1:9000/setting.html");
  } else {
    settingWindow.loadURL("file://".concat(path.join(__dirname, '../dist/setting.html')));
  }
}

app.whenReady().then(function () {
  createMainWindow(); // createSettingWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
  ipcMain.on('get-root-path', function (event) {
    event.reply('reply-root-path', ROOT_PATH);
  });
  ipcMain.on('open-setting-window', function () {
    createSettingWindow();
    console.log(1234);
  });
  ipcMain.on('open-save-resume-path', function (e) {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }).then(function (result) {
      e.reply('reply-save-resume-path', result.filePaths);
    })["catch"](function (err) {
      e.reply('reply-save-resume-path', err);
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFaLEVBQStCdEIsU0FBL0I7RUFDRCxDQUZEO0VBSUFOLE9BQU8sQ0FBQ3dCLEVBQVIsQ0FBVyxxQkFBWCxFQUFrQyxZQUFNO0lBQ3RDTCxtQkFBbUI7SUFDbkJVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7RUFDRCxDQUhEO0VBS0E5QixPQUFPLENBQUN3QixFQUFSLENBQVcsdUJBQVgsRUFBb0MsVUFBQ08sQ0FBRCxFQUFPO0lBQ3pDOUIsTUFBTSxDQUNIK0IsY0FESCxDQUNrQjtNQUNkQyxVQUFVLEVBQUUsQ0FBQyxlQUFEO0lBREUsQ0FEbEIsRUFJR1YsSUFKSCxDQUlRLFVBQUNXLE1BQUQsRUFBWTtNQUNoQkgsQ0FBQyxDQUFDSCxLQUFGLENBQVEsd0JBQVIsRUFBa0NNLE1BQU0sQ0FBQ0MsU0FBekM7SUFDRCxDQU5ILFdBT1MsVUFBQ0MsR0FBRCxFQUFTO01BQ2RMLENBQUMsQ0FBQ0gsS0FBRixDQUFRLHdCQUFSLEVBQWtDUSxHQUFsQztJQUNELENBVEg7RUFVRCxDQVhEO0FBWUQsQ0E1QkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay8uL21haW4vZWxlY3Ryb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgeyBCcm93c2VyV2luZG93LCBhcHAsIGlwY01haW4sIGRpYWxvZyB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcclxuXHJcbmZ1bmN0aW9uIGlzRGV2KCkge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxufVxyXG5cclxuY29uc3QgUk9PVF9QQVRIID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcuLi8nKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcclxuLy8gICAvLyDliJvlu7rkuLvlupTnlKjnqpflj6NcclxuLy8gICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4vLyAgICAgd2lkdGg6IDEyMDAsXHJcbi8vICAgICBoZWlnaHQ6IDgwMCxcclxuLy8gICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbi8vICAgICAgIGRldlRvb2xzOiB0cnVlLFxyXG4vLyAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbi8vICAgICAgIHByZWxvYWQ6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3ByZWxvYWQuanMnKSxcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIC8vIOWIm+W7uuW6lOeUqOiuvue9rueql+WPo1xyXG4vLyAgIGNvbnN0IHNldHRpbmdXaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbi8vICAgICB3aWR0aDogNzIwLFxyXG4vLyAgICAgaGVpZ2h0OiAyNDAsXHJcbi8vICAgICByZXNpemFibGU6IGZhbHNlLFxyXG4vLyAgICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuLy8gICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbi8vICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcclxuLy8gICAgICAgcHJlbG9hZDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vcHJlbG9hZC5qcycpLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuXHJcbi8vICAgaWYgKGlzRGV2KCkpIHtcclxuLy8gICAgIG1haW5XaW5kb3cubG9hZFVSTChgaHR0cDovLzEyNy4wLjAuMTo5MDAwYCk7XHJcbi8vICAgICBzZXR0aW5nV2luZG93LmxvYWRVUkwoYGh0dHA6Ly8xMjcuMC4wLjE6OTAwMC9zZXR0aW5nLmh0bWxgKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgbWFpbldpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vZGlzdC9pbmRleC5odG1sJyl9YCk7XHJcbi8vICAgICBzZXR0aW5nV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke3BhdGguam9pbihfX2Rpcm5hbWUsICcuLi9kaXN0L3NldHRpbmcuaHRtbCcpfWApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbldpbmRvdygpIHtcclxuICAvLyDliJvlu7rkuLvlupTnlKjnqpflj6NcclxuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICAgIHByZWxvYWQ6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3ByZWxvYWQuanMnKSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0RldigpKSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGh0dHA6Ly8xMjcuMC4wLjE6OTAwMGApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke3BhdGguam9pbihfX2Rpcm5hbWUsICcuLi9kaXN0L2luZGV4Lmh0bWwnKX1gKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdXaW5kb3coKSB7XHJcbiAgLy8g5Yib5bu65bqU55So6K6+572u56qX5Y+jXHJcbiAgY29uc3Qgc2V0dGluZ1dpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcclxuICAgIHdpZHRoOiA3MjAsXHJcbiAgICBoZWlnaHQ6IDM2MCxcclxuICAgIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xyXG4gICAgICBkZXZUb29sczogdHJ1ZSxcclxuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxyXG4gICAgICBwcmVsb2FkOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9wcmVsb2FkLmpzJyksXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaXNEZXYoKSkge1xyXG4gICAgc2V0dGluZ1dpbmRvdy5sb2FkVVJMKGBodHRwOi8vMTI3LjAuMC4xOjkwMDAvc2V0dGluZy5odG1sYCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldHRpbmdXaW5kb3cubG9hZFVSTChgZmlsZTovLyR7cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2Rpc3Qvc2V0dGluZy5odG1sJyl9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgY3JlYXRlTWFpbldpbmRvdygpO1xyXG4gIC8vIGNyZWF0ZVNldHRpbmdXaW5kb3coKTtcclxuICBhcHAub24oJ2FjdGl2YXRlJywgKCkgPT4ge1xyXG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlTWFpbldpbmRvdygpO1xyXG4gIH0pO1xyXG5cclxuICBpcGNNYWluLm9uKCdnZXQtcm9vdC1wYXRoJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5yZXBseSgncmVwbHktcm9vdC1wYXRoJywgUk9PVF9QQVRIKTtcclxuICB9KTtcclxuXHJcbiAgaXBjTWFpbi5vbignb3Blbi1zZXR0aW5nLXdpbmRvdycsICgpID0+IHtcclxuICAgIGNyZWF0ZVNldHRpbmdXaW5kb3coKTtcclxuICAgIGNvbnNvbGUubG9nKDEyMzQpO1xyXG4gIH0pO1xyXG5cclxuICBpcGNNYWluLm9uKCdvcGVuLXNhdmUtcmVzdW1lLXBhdGgnLCAoZSkgPT4ge1xyXG4gICAgZGlhbG9nXHJcbiAgICAgIC5zaG93T3BlbkRpYWxvZyh7XHJcbiAgICAgICAgcHJvcGVydGllczogWydvcGVuRGlyZWN0b3J5J10sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBlLnJlcGx5KCdyZXBseS1zYXZlLXJlc3VtZS1wYXRoJywgcmVzdWx0LmZpbGVQYXRocyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZS5yZXBseSgncmVwbHktc2F2ZS1yZXN1bWUtcGF0aCcsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiQnJvd3NlcldpbmRvdyIsImFwcCIsImlwY01haW4iLCJkaWFsb2ciLCJpc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJPT1RfUEFUSCIsImpvaW4iLCJnZXRBcHBQYXRoIiwiY3JlYXRlTWFpbldpbmRvdyIsIm1haW5XaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwiZGV2VG9vbHMiLCJub2RlSW50ZWdyYXRpb24iLCJwcmVsb2FkIiwiX19kaXJuYW1lIiwibG9hZFVSTCIsImNyZWF0ZVNldHRpbmdXaW5kb3ciLCJzZXR0aW5nV2luZG93IiwicmVzaXphYmxlIiwid2hlblJlYWR5IiwidGhlbiIsIm9uIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCIsImV2ZW50IiwicmVwbHkiLCJjb25zb2xlIiwibG9nIiwiZSIsInNob3dPcGVuRGlhbG9nIiwicHJvcGVydGllcyIsInJlc3VsdCIsImZpbGVQYXRocyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=