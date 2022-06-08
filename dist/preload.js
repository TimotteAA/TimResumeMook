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
    remote = _require.remote,
    shell = _require.shell;

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
  remote: remote,
  shell: shell
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBLGVBQXNEQSxtQkFBTyxDQUFDLDBCQUFELENBQTdEO0FBQUEsSUFBUUMsYUFBUixZQUFRQSxhQUFSO0FBQUEsSUFBdUJDLFdBQXZCLFlBQXVCQSxXQUF2QjtBQUFBLElBQW9DQyxNQUFwQyxZQUFvQ0EsTUFBcEM7QUFBQSxJQUE0Q0MsS0FBNUMsWUFBNENBLEtBQTVDOztBQUVBSCxhQUFhLENBQUNJLGlCQUFkLENBQWdDLFVBQWhDLEVBQTRDO0VBQzFDSCxXQUFXLEVBQVhBLFdBRDBDO0VBRTFDQyxNQUFNLEVBQU5BLE1BRjBDO0VBRzFDQyxLQUFLLEVBQUxBO0FBSDBDLENBQTVDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNyZXN1bWVtb29rL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay8uL21haW4vcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgcmVtb3RlLCBzaGVsbCB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcclxuXHJcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ2VsZWN0cm9uJywge1xyXG4gIGlwY1JlbmRlcmVyLFxyXG4gIHJlbW90ZSxcclxuICBzaGVsbCxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29udGV4dEJyaWRnZSIsImlwY1JlbmRlcmVyIiwicmVtb3RlIiwic2hlbGwiLCJleHBvc2VJbk1haW5Xb3JsZCJdLCJzb3VyY2VSb290IjoiIn0=