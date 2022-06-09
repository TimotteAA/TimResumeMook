const { onReplyRootPath } = window.ipcRenderApi;
const { ipcRenderer } = window.electron;
function getRootPath() {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('get-root-path', '');
    onReplyRootPath((path: string) => {
      if (path) {
        resolve(path);
      } else {
        reject(path);
      }
    });
  });
}

export default getRootPath;
