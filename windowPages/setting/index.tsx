import React, { useEffect, useState } from 'react';

import styles from './index.module.less';
import getRootPath from '@utils/getRootPath';
import { setLocalResumePath, getResumeSavePath } from '@utils/localResumePath';

const { onOpenSaveResumePath } = window.openSaveResumePath;
const { onReplySaveResumePath } = window.replySaveResumePath;

export default function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');

  // 刚挂载，更新保存路径
  useEffect(() => {
    const getResumePath = async () => {
      const rootPath = await getRootPath();
      const res = await getResumeSavePath(rootPath);
      if (res) {
        setResumeSavePath(res);
      }
    };
  }, []);

  const onChangePath = () => {
    // 1. 向主进程发送消息，因为 dialog 模块只能在主进程中调用
    onOpenSaveResumePath();
    // 2. 监听从主进程发送回来的消息
    onReplySaveResumePath(setResumeSavePath);
  };

  useEffect(() => {
    if (resumeSavePath) {
      getRootPath().then(async (res: string) => {
        // 写入根目录的appConfig的本地记录中
        setLocalResumePath(res, resumeSavePath);
      });
    }
  }, [resumeSavePath]);
  console.log(resumeSavePath);

  return (
    <div className={styles.container}>
      <p className={styles.label}>修改简历导出路径</p>
      <div className={styles.input}>
        <div className={styles.value}>{resumeSavePath || '当前存储路径为：'}</div>
        <div className={styles.updateBtn} onClick={onChangePath}>
          更改路径
        </div>
      </div>
    </div>
  );
}
