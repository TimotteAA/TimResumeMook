import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';
import Button from '@src/components/button/Button';

export default function ResumeHeader() {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/');
  };

  const onExportPDF = () => {};

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
