import fileAction from './file';
const { resolve } = window.electron;

export async function setLocalResumePath(path: string, resumePath: string) {
  const cachePath = resolve(path, './appConfig/global.json');

  const content = {
    resumeSavePath: resumePath,
  };

  fileAction.canWrite(cachePath).then(() => {
    fileAction.write(cachePath, JSON.stringify(content), 'utf-8').then((res) => {});
  });
}

export async function getResumeSavePath(path: string) {
  const cachePath = resolve(path, './appConfig/global.json');

  try {
    await fileAction.canRead(cachePath);
  } catch (err) {
    console.log(err);
  }

  const res = JSON.parse(await fileAction.read(cachePath));

  return res.resumeSavePath;
}
