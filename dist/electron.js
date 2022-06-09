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
    ipcMain = _require.ipcMain;

function isDev() {
  return "development" === 'development';
}

var ROOT_PATH = path.join(app.getAppPath(), '../');

function createMainWindow() {
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    }
  });

  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:9000');
  } else {
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../dist/index.html')));
  }

  mainWindow.webContents.openDevTools();
}

app.whenReady().then(function () {
  createMainWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
  ipcMain.on('get-root-path', function (event) {
    event.reply('reply-root-path', ROOT_PATH);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxlQUF3Q0EsbUJBQU8sQ0FBQywwQkFBRCxDQUEvQztBQUFBLElBQVFDLGFBQVIsWUFBUUEsYUFBUjtBQUFBLElBQXVCQyxHQUF2QixZQUF1QkEsR0FBdkI7QUFBQSxJQUE0QkMsT0FBNUIsWUFBNEJBLE9BQTVCOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7RUFDZixPQUFPQyxhQUFBLEtBQXlCLGFBQWhDO0FBQ0Q7O0FBRUQsSUFBTUcsU0FBUyxHQUFHVCxJQUFJLENBQUNVLElBQUwsQ0FBVVAsR0FBRyxDQUFDUSxVQUFKLEVBQVYsRUFBNEIsS0FBNUIsQ0FBbEI7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7RUFDMUIsSUFBTUMsVUFBVSxHQUFHLElBQUlYLGFBQUosQ0FBa0I7SUFDbkNZLEtBQUssRUFBRSxJQUQ0QjtJQUVuQ0MsTUFBTSxFQUFFLEdBRjJCO0lBR25DQyxjQUFjLEVBQUU7TUFDZEMsZUFBZSxFQUFFLElBREg7TUFFZEMsT0FBTyxFQUFFbEIsSUFBSSxDQUFDVSxJQUFMLENBQVVTLFNBQVYsRUFBcUIsY0FBckI7SUFGSztFQUhtQixDQUFsQixDQUFuQjs7RUFRQSxJQUFJZCxLQUFLLEVBQVQsRUFBYTtJQUNYUSxVQUFVLENBQUNPLE9BQVgsQ0FBbUIsdUJBQW5CO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xQLFVBQVUsQ0FBQ08sT0FBWCxrQkFBNkJwQixJQUFJLENBQUNVLElBQUwsQ0FBVVMsU0FBVixFQUFxQixvQkFBckIsQ0FBN0I7RUFDRDs7RUFDRE4sVUFBVSxDQUFDUSxXQUFYLENBQXVCQyxZQUF2QjtBQUNEOztBQUVEbkIsR0FBRyxDQUFDb0IsU0FBSixHQUFnQkMsSUFBaEIsQ0FBcUIsWUFBTTtFQUN6QlosZ0JBQWdCO0VBQ2hCVCxHQUFHLENBQUNzQixFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFNO0lBQ3ZCLElBQUl2QixhQUFhLENBQUN3QixhQUFkLEdBQThCQyxNQUE5QixLQUF5QyxDQUE3QyxFQUFnRGYsZ0JBQWdCO0VBQ2pFLENBRkQ7RUFJQVIsT0FBTyxDQUFDcUIsRUFBUixDQUFXLGVBQVgsRUFBNEIsVUFBQ0csS0FBRCxFQUFXO0lBQ3JDQSxLQUFLLENBQUNDLEtBQU4sQ0FBWSxpQkFBWixFQUErQnBCLFNBQS9CO0VBQ0QsQ0FGRDtBQUdELENBVEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay8uL21haW4vZWxlY3Ryb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgeyBCcm93c2VyV2luZG93LCBhcHAsIGlwY01haW4gfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XHJcblxyXG5mdW5jdGlvbiBpc0RldigpIHtcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcbn1cclxuXHJcbmNvbnN0IFJPT1RfUEFUSCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnLi4vJyk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluV2luZG93KCkge1xyXG4gIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIGhlaWdodDogODAwLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxyXG4gICAgICBwcmVsb2FkOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9wcmVsb2FkLmpzJyksXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChpc0RldigpKSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2h0dHA6Ly8xMjcuMC4wLjE6OTAwMCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke3BhdGguam9pbihfX2Rpcm5hbWUsICcuLi9kaXN0L2luZGV4Lmh0bWwnKX1gKTtcclxuICB9XHJcbiAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcclxufVxyXG5cclxuYXBwLndoZW5SZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gIGNyZWF0ZU1haW5XaW5kb3coKTtcclxuICBhcHAub24oJ2FjdGl2YXRlJywgKCkgPT4ge1xyXG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlTWFpbldpbmRvdygpO1xyXG4gIH0pO1xyXG5cclxuICBpcGNNYWluLm9uKCdnZXQtcm9vdC1wYXRoJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5yZXBseSgncmVwbHktcm9vdC1wYXRoJywgUk9PVF9QQVRIKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIkJyb3dzZXJXaW5kb3ciLCJhcHAiLCJpcGNNYWluIiwiaXNEZXYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJST09UX1BBVEgiLCJqb2luIiwiZ2V0QXBwUGF0aCIsImNyZWF0ZU1haW5XaW5kb3ciLCJtYWluV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJ3ZWJQcmVmZXJlbmNlcyIsIm5vZGVJbnRlZ3JhdGlvbiIsInByZWxvYWQiLCJfX2Rpcm5hbWUiLCJsb2FkVVJMIiwid2ViQ29udGVudHMiLCJvcGVuRGV2VG9vbHMiLCJ3aGVuUmVhZHkiLCJ0aGVuIiwib24iLCJnZXRBbGxXaW5kb3dzIiwibGVuZ3RoIiwiZXZlbnQiLCJyZXBseSJdLCJzb3VyY2VSb290IjoiIn0=