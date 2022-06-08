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
      nodeIntegration: true
    }
  });

  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:9000');
  } else {
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../dist/index.html')));
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxlQUErQkEsbUJBQU8sQ0FBQywwQkFBRCxDQUF0QztBQUFBLElBQVFDLGFBQVIsWUFBUUEsYUFBUjtBQUFBLElBQXVCQyxHQUF2QixZQUF1QkEsR0FBdkI7O0FBRUEsU0FBU0MsS0FBVCxHQUFpQjtFQUNmLE9BQU9DLGFBQUEsS0FBeUIsYUFBaEM7QUFDRDs7QUFFRCxTQUFTRyxnQkFBVCxHQUE0QjtFQUMxQixJQUFNQyxVQUFVLEdBQUcsSUFBSVAsYUFBSixDQUFrQjtJQUNuQ1EsS0FBSyxFQUFFLElBRDRCO0lBRW5DQyxNQUFNLEVBQUUsR0FGMkI7SUFHbkNDLGNBQWMsRUFBRTtNQUNkQyxlQUFlLEVBQUU7SUFESDtFQUhtQixDQUFsQixDQUFuQjs7RUFPQSxJQUFJVCxLQUFLLEVBQVQsRUFBYTtJQUNYSyxVQUFVLENBQUNLLE9BQVgsQ0FBbUIsdUJBQW5CO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xMLFVBQVUsQ0FBQ0ssT0FBWCxrQkFBNkJkLElBQUksQ0FBQ2UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLG9CQUFyQixDQUE3QjtFQUNEO0FBQ0Y7O0FBRURiLEdBQUcsQ0FBQ2MsU0FBSixHQUFnQkMsSUFBaEIsQ0FBcUIsWUFBTTtFQUN6QlYsZ0JBQWdCO0VBQ2hCTCxHQUFHLENBQUNnQixFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFNO0lBQ3ZCLElBQUlqQixhQUFhLENBQUNrQixhQUFkLEdBQThCQyxNQUE5QixLQUF5QyxDQUE3QyxFQUFnRGIsZ0JBQWdCO0VBQ2pFLENBRkQ7QUFHRCxDQUxELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNyZXN1bWVtb29rL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly92aXNyZXN1bWVtb29rL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svLi9tYWluL2VsZWN0cm9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IHsgQnJvd3NlcldpbmRvdywgYXBwIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xyXG5cclxuZnVuY3Rpb24gaXNEZXYoKSB7XHJcbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluV2luZG93KCkge1xyXG4gIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIGhlaWdodDogODAwLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAoaXNEZXYoKSkge1xyXG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdodHRwOi8vMTI3LjAuMC4xOjkwMDAnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vZGlzdC9pbmRleC5odG1sJyl9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgY3JlYXRlTWFpbldpbmRvdygpO1xyXG4gIGFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XHJcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSBjcmVhdGVNYWluV2luZG93KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJCcm93c2VyV2luZG93IiwiYXBwIiwiaXNEZXYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjcmVhdGVNYWluV2luZG93IiwibWFpbldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJub2RlSW50ZWdyYXRpb24iLCJsb2FkVVJMIiwiam9pbiIsIl9fZGlybmFtZSIsIndoZW5SZWFkeSIsInRoZW4iLCJvbiIsImdldEFsbFdpbmRvd3MiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9