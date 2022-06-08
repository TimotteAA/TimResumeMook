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
    app = _require.app;

function isDev() {
  return "development" === 'development';
}

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
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxlQUErQkEsbUJBQU8sQ0FBQywwQkFBRCxDQUF0QztBQUFBLElBQVFDLGFBQVIsWUFBUUEsYUFBUjtBQUFBLElBQXVCQyxHQUF2QixZQUF1QkEsR0FBdkI7O0FBRUEsU0FBU0MsS0FBVCxHQUFpQjtFQUNmLE9BQU9DLGFBQUEsS0FBeUIsYUFBaEM7QUFDRDs7QUFFRCxTQUFTRyxnQkFBVCxHQUE0QjtFQUMxQixJQUFNQyxVQUFVLEdBQUcsSUFBSVAsYUFBSixDQUFrQjtJQUNuQ1EsS0FBSyxFQUFFLElBRDRCO0lBRW5DQyxNQUFNLEVBQUUsR0FGMkI7SUFHbkNDLGNBQWMsRUFBRTtNQUNkQyxlQUFlLEVBQUUsSUFESDtNQUVkQyxPQUFPLEVBQUVkLElBQUksQ0FBQ2UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGNBQXJCO0lBRks7RUFIbUIsQ0FBbEIsQ0FBbkI7O0VBUUEsSUFBSVosS0FBSyxFQUFULEVBQWE7SUFDWEssVUFBVSxDQUFDUSxPQUFYLENBQW1CLHVCQUFuQjtFQUNELENBRkQsTUFFTztJQUNMUixVQUFVLENBQUNRLE9BQVgsa0JBQTZCakIsSUFBSSxDQUFDZSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsb0JBQXJCLENBQTdCO0VBQ0Q7O0VBQ0RQLFVBQVUsQ0FBQ1MsV0FBWCxDQUF1QkMsWUFBdkI7QUFDRDs7QUFFRGhCLEdBQUcsQ0FBQ2lCLFNBQUosR0FBZ0JDLElBQWhCLENBQXFCLFlBQU07RUFDekJiLGdCQUFnQjtFQUNoQkwsR0FBRyxDQUFDbUIsRUFBSixDQUFPLFVBQVAsRUFBbUIsWUFBTTtJQUN2QixJQUFJcEIsYUFBYSxDQUFDcUIsYUFBZCxHQUE4QkMsTUFBOUIsS0FBeUMsQ0FBN0MsRUFBZ0RoQixnQkFBZ0I7RUFDakUsQ0FGRDtBQUdELENBTEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay8uL21haW4vZWxlY3Ryb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgeyBCcm93c2VyV2luZG93LCBhcHAgfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XHJcblxyXG5mdW5jdGlvbiBpc0RldigpIHtcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW5XaW5kb3coKSB7XHJcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcclxuICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgaGVpZ2h0OiA4MDAsXHJcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xyXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICAgIHByZWxvYWQ6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3ByZWxvYWQuanMnKSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGlzRGV2KCkpIHtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTCgnaHR0cDovLzEyNy4wLjAuMTo5MDAwJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTChgZmlsZTovLyR7cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2Rpc3QvaW5kZXguaHRtbCcpfWApO1xyXG4gIH1cclxuICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xyXG59XHJcblxyXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgY3JlYXRlTWFpbldpbmRvdygpO1xyXG4gIGFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XHJcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSBjcmVhdGVNYWluV2luZG93KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJCcm93c2VyV2luZG93IiwiYXBwIiwiaXNEZXYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjcmVhdGVNYWluV2luZG93IiwibWFpbldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJub2RlSW50ZWdyYXRpb24iLCJwcmVsb2FkIiwiam9pbiIsIl9fZGlybmFtZSIsImxvYWRVUkwiLCJ3ZWJDb250ZW50cyIsIm9wZW5EZXZUb29scyIsIndoZW5SZWFkeSIsInRoZW4iLCJvbiIsImdldEFsbFdpbmRvd3MiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9