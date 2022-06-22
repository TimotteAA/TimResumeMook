import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import styles from './index.module.less';
import Input from '@src/components/input/Input';
import Modal from '@src/components/Modal';
import useUpdateResumeHook from '../../useUpdateResumeHook';

interface IProps {
  onClose(): void;
}

export default function Education({ onClose }: IProps) {
  const updateBaseHook = useUpdateResumeHook('evaluation');
  const { evaluation } = useAppSelector((state) => {
    return {
      evaluation: state.resume.resumeData.evaluation,
    };
  });

  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '关闭', callback: onClose, isShow: true }, submitBtn: { isShow: false } }}
      showFooter={true}
      title="教育经历（最高学历）"
    >
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>自我评价 ：
          </div>
          <div className={styles.right}>
            <Input
              type="textarea"
              onChange={(e) => {
                const value = e?.target?.value;
                updateBaseHook('evaluation', value);
              }}
              value={evaluation || ''}
              placeholder="请输入贵校"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Confirm>
  );
}
