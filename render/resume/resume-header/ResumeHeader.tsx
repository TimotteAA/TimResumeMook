import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';
import Button from '@src/components/button/Button';
import getRootPath from '@utils/getRootPath';
import { useAppSelector } from '@utils/reduxHooks';
import { getResumeSavePath } from '@utils/localResumePath';

const { onOpenSettingWindow } = window.openSettingWindow;
// const { store } = window.electron;

export default function ResumeHeader() {
  const navigate = useNavigate();

  const { resumeData } = useAppSelector((state) => {
    return {
      resumeData: state.resume.resumeData,
    };
  });

  const onButtonClick = () => {
    navigate('/');
  };

  const onExportPDF = async () => {
    const rootPath = await getRootPath();
    const res = await getResumeSavePath(rootPath);
    if (!res) {
      onOpenSettingWindow();
      return;
    } else {
      // store.set('resume', resumeData);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <Button size="middle" onClick={onButtonClick}>
        回到首页
      </Button>
      <Button size="middle" onClick={onExportPDF} className={styles.exportBtn}>
        导出pdf
      </Button>
    </div>
  );
}
