import fs, { promises as fsPromises } from 'fs';
const fileAction = {
  read: (path: string, encoding: BufferEncoding): Promise<string> => {
    return fsPromises.readFile(path, { encoding: encoding || 'utf8' });
  },
  write: (path: string, content: string, encoding: BufferEncoding): Promise<void> => {
    return fsPromises.writeFile(path, content, { encoding: encoding || 'utf8' });
  },
  rename: (oldPath: string, newPath: string) => {
    return fsPromises.rename(oldPath, newPath);
  },
  delete: (path: string) => {
    return fsPromises.unlink(path);
  },
  hasFile: (path: string) => {
    return fsPromises.access(path, fs.constants.F_OK);
  },
  canWrite: (path: string) => {
    return fsPromises.access(path, fs.constants.W_OK);
  },
  canRead: (path: string) => {
    return fsPromises.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
