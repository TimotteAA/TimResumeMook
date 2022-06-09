/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/*!*************************!*\
  !*** ./main/preload.js ***!
  \*************************/


var _require = __webpack_require__(/*! electron */ "electron"),
    contextBridge = _require.contextBridge,
    ipcRenderer = _require.ipcRenderer,
    shell = _require.shell;

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
  shell: shell
});
contextBridge.exposeInMainWorld('ipcRenderApi', {
  onReplyRootPath: function onReplyRootPath(handler) {
    ipcRenderer.on('reply-root-path', function (_) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      handler.apply(void 0, args);
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBLGVBQThDQSxtQkFBTyxDQUFDLDBCQUFELENBQXJEO0FBQUEsSUFBUUMsYUFBUixZQUFRQSxhQUFSO0FBQUEsSUFBdUJDLFdBQXZCLFlBQXVCQSxXQUF2QjtBQUFBLElBQW9DQyxLQUFwQyxZQUFvQ0EsS0FBcEM7O0FBRUFGLGFBQWEsQ0FBQ0csaUJBQWQsQ0FBZ0MsVUFBaEMsRUFBNEM7RUFDMUNGLFdBQVcsRUFBWEEsV0FEMEM7RUFFMUNDLEtBQUssRUFBTEE7QUFGMEMsQ0FBNUM7QUFLQUYsYUFBYSxDQUFDRyxpQkFBZCxDQUFnQyxjQUFoQyxFQUFnRDtFQUM5Q0MsZUFBZSxFQUFFLHlCQUFDQyxPQUFELEVBQWE7SUFDNUJKLFdBQVcsQ0FBQ0ssRUFBWixDQUFlLGlCQUFmLEVBQWtDLFVBQUNDLENBQUQsRUFBZ0I7TUFBQSxrQ0FBVEMsSUFBUztRQUFUQSxJQUFTO01BQUE7O01BQ2hESCxPQUFPLE1BQVAsU0FBV0csSUFBWDtJQUNELENBRkQ7RUFHRDtBQUw2QyxDQUFoRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly92aXNyZXN1bWVtb29rL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svLi9tYWluL3ByZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIsIHNoZWxsIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xyXG5cclxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZWxlY3Ryb24nLCB7XHJcbiAgaXBjUmVuZGVyZXIsXHJcbiAgc2hlbGwsXHJcbn0pO1xyXG5cclxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnaXBjUmVuZGVyQXBpJywge1xyXG4gIG9uUmVwbHlSb290UGF0aDogKGhhbmRsZXIpID0+IHtcclxuICAgIGlwY1JlbmRlcmVyLm9uKCdyZXBseS1yb290LXBhdGgnLCAoXywgLi4uYXJncykgPT4ge1xyXG4gICAgICBoYW5kbGVyKC4uLmFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29udGV4dEJyaWRnZSIsImlwY1JlbmRlcmVyIiwic2hlbGwiLCJleHBvc2VJbk1haW5Xb3JsZCIsIm9uUmVwbHlSb290UGF0aCIsImhhbmRsZXIiLCJvbiIsIl8iLCJhcmdzIl0sInNvdXJjZVJvb3QiOiIifQ==