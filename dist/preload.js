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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/*!*************************!*\
  !*** ./main/preload.js ***!
  \*************************/


var _require = __webpack_require__(/*! electron */ "electron"),
    contextBridge = _require.contextBridge,
    ipcRenderer = _require.ipcRenderer,
    shell = _require.shell;

var _require2 = __webpack_require__(/*! path */ "path"),
    resolve = _require2.resolve,
    join = _require2.join; // const fs = require('fs');


var fs = __webpack_require__(/*! fs */ "fs"); // 告知主进程从store中获取数据


contextBridge.exposeInMainWorld('getResumeData', {
  // 主进程接收get-resume-data的事件，然后发送onReplyResumeData事件
  onGetResumeData: function onGetResumeData() {
    ipcRenderer.send('get-resume-data', '');
  },
  onReplyResumeData: function onReplyResumeData() {
    return new Promise(function (resolve) {
      ipcRenderer.on('reply-resume-data', function (_, arg) {
        if (arg) {
          resolve(arg);
        }
      });
    });
  }
}); // 告知主进程从store中设置数据

contextBridge.exposeInMainWorld('setResumeData', {
  onSetResumeData: function onSetResumeData(data) {
    ipcRenderer.send('set-resume-data', data);
  }
}); // 告知主线程打印

contextBridge.exposeInMainWorld('exportSelectionToPDF', {
  sendExportSelectionToPDF: function sendExportSelectionToPDF(data) {
    ipcRenderer.send('exportSelectionToPDF', data);
  }
});
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
  shell: shell,
  resolve: resolve,
  join: join,
  fsPromises: fs.promises,
  fs: fs
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
}); // 告知主进程打开

contextBridge.exposeInMainWorld('openSettingWindow', {
  onOpenSettingWindow: function onOpenSettingWindow() {
    ipcRenderer.send('open-setting-window', '');
  }
}); // 让主进程打开dialog选择存储路径

contextBridge.exposeInMainWorld('openSaveResumePath', {
  onOpenSaveResumePath: function onOpenSaveResumePath() {
    ipcRenderer.send('open-save-resume-path', '');
  }
}); // 主进程告知渲染进程用户选择的保存路径

contextBridge.exposeInMainWorld('replySaveResumePath', {
  onReplySaveResumePath: function onReplySaveResumePath(setResumeSavePath) {
    ipcRenderer.on('reply-save-resume-path', function (_, args) {
      if (args) {
        if (args.length > 0) {
          setResumeSavePath(args[0]);
        } else {
          console.log('失败啦！');
        }
      }
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLHVCQUFqQixFQUEwQyxFQUExQztFQUNEO0FBSG1ELENBQXRELEdBTUE7O0FBQ0FSLGFBQWEsQ0FBQ00saUJBQWQsQ0FBZ0MscUJBQWhDLEVBQXVEO0VBQ3JEa0IscUJBQXFCLEVBQUUsK0JBQUNDLGlCQUFELEVBQXVCO0lBQzVDeEIsV0FBVyxDQUFDVSxFQUFaLENBQWUsd0JBQWYsRUFBeUMsVUFBQ0MsQ0FBRCxFQUFJUyxJQUFKLEVBQWE7TUFDcEQsSUFBSUEsSUFBSixFQUFVO1FBQ1IsSUFBSUEsSUFBSSxDQUFDSyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7VUFDbkJELGlCQUFpQixDQUFDSixJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWpCO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7UUFDRDtNQUNGO0lBQ0YsQ0FSRDtFQVNEO0FBWG9ELENBQXZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNyZXN1bWVtb29rL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3Zpc3Jlc3VtZW1vb2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlzcmVzdW1lbW9vay8uL21haW4vcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCB7IGNvbnRleHRCcmlkZ2UsIGlwY1JlbmRlcmVyLCBzaGVsbCB9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcclxuY29uc3QgeyByZXNvbHZlLCBqb2luIH0gPSByZXF1aXJlKCdwYXRoJyk7XHJcbi8vIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5cclxuLy8g5ZGK55+l5Li76L+b56iL5LuOc3RvcmXkuK3ojrflj5bmlbDmja5cclxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZ2V0UmVzdW1lRGF0YScsIHtcclxuICAvLyDkuLvov5vnqIvmjqXmlLZnZXQtcmVzdW1lLWRhdGHnmoTkuovku7bvvIznhLblkI7lj5HpgIFvblJlcGx5UmVzdW1lRGF0YeS6i+S7tlxyXG4gIG9uR2V0UmVzdW1lRGF0YSgpIHtcclxuICAgIGlwY1JlbmRlcmVyLnNlbmQoJ2dldC1yZXN1bWUtZGF0YScsICcnKTtcclxuICB9LFxyXG4gIG9uUmVwbHlSZXN1bWVEYXRhOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgaXBjUmVuZGVyZXIub24oJ3JlcGx5LXJlc3VtZS1kYXRhJywgKF8sIGFyZykgPT4ge1xyXG4gICAgICAgIGlmIChhcmcpIHtcclxuICAgICAgICAgIHJlc29sdmUoYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyDlkYrnn6XkuLvov5vnqIvku45zdG9yZeS4reiuvue9ruaVsOaNrlxyXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdzZXRSZXN1bWVEYXRhJywge1xyXG4gIG9uU2V0UmVzdW1lRGF0YShkYXRhKSB7XHJcbiAgICBpcGNSZW5kZXJlci5zZW5kKCdzZXQtcmVzdW1lLWRhdGEnLCBkYXRhKTtcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIOWRiuefpeS4u+e6v+eoi+aJk+WNsFxyXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdleHBvcnRTZWxlY3Rpb25Ub1BERicsIHtcclxuICBzZW5kRXhwb3J0U2VsZWN0aW9uVG9QREYoZGF0YSkge1xyXG4gICAgaXBjUmVuZGVyZXIuc2VuZCgnZXhwb3J0U2VsZWN0aW9uVG9QREYnLCBkYXRhKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ2VsZWN0cm9uJywge1xyXG4gIGlwY1JlbmRlcmVyLFxyXG4gIHNoZWxsLFxyXG4gIHJlc29sdmUsXHJcbiAgam9pbixcclxuICBmc1Byb21pc2VzOiBmcy5wcm9taXNlcyxcclxuICBmcyxcclxufSk7XHJcblxyXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdpcGNSZW5kZXJBcGknLCB7XHJcbiAgb25SZXBseVJvb3RQYXRoOiAoaGFuZGxlcikgPT4ge1xyXG4gICAgaXBjUmVuZGVyZXIub24oJ3JlcGx5LXJvb3QtcGF0aCcsIChfLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgIGhhbmRsZXIoLi4uYXJncyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIOWRiuefpeS4u+i/m+eoi+aJk+W8gFxyXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdvcGVuU2V0dGluZ1dpbmRvdycsIHtcclxuICBvbk9wZW5TZXR0aW5nV2luZG93OiAoKSA9PiB7XHJcbiAgICBpcGNSZW5kZXJlci5zZW5kKCdvcGVuLXNldHRpbmctd2luZG93JywgJycpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8g6K6p5Li76L+b56iL5omT5byAZGlhbG9n6YCJ5oup5a2Y5YKo6Lev5b6EXHJcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ29wZW5TYXZlUmVzdW1lUGF0aCcsIHtcclxuICBvbk9wZW5TYXZlUmVzdW1lUGF0aDogKCkgPT4ge1xyXG4gICAgaXBjUmVuZGVyZXIuc2VuZCgnb3Blbi1zYXZlLXJlc3VtZS1wYXRoJywgJycpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8g5Li76L+b56iL5ZGK55+l5riy5p+T6L+b56iL55So5oi36YCJ5oup55qE5L+d5a2Y6Lev5b6EXHJcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ3JlcGx5U2F2ZVJlc3VtZVBhdGgnLCB7XHJcbiAgb25SZXBseVNhdmVSZXN1bWVQYXRoOiAoc2V0UmVzdW1lU2F2ZVBhdGgpID0+IHtcclxuICAgIGlwY1JlbmRlcmVyLm9uKCdyZXBseS1zYXZlLXJlc3VtZS1wYXRoJywgKF8sIGFyZ3MpID0+IHtcclxuICAgICAgaWYgKGFyZ3MpIHtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZXRSZXN1bWVTYXZlUGF0aChhcmdzWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0peWVpu+8gScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29udGV4dEJyaWRnZSIsImlwY1JlbmRlcmVyIiwic2hlbGwiLCJyZXNvbHZlIiwiam9pbiIsImZzIiwiZXhwb3NlSW5NYWluV29ybGQiLCJvbkdldFJlc3VtZURhdGEiLCJzZW5kIiwib25SZXBseVJlc3VtZURhdGEiLCJQcm9taXNlIiwib24iLCJfIiwiYXJnIiwib25TZXRSZXN1bWVEYXRhIiwiZGF0YSIsInNlbmRFeHBvcnRTZWxlY3Rpb25Ub1BERiIsImZzUHJvbWlzZXMiLCJwcm9taXNlcyIsIm9uUmVwbHlSb290UGF0aCIsImhhbmRsZXIiLCJhcmdzIiwib25PcGVuU2V0dGluZ1dpbmRvdyIsIm9uT3BlblNhdmVSZXN1bWVQYXRoIiwib25SZXBseVNhdmVSZXN1bWVQYXRoIiwic2V0UmVzdW1lU2F2ZVBhdGgiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==