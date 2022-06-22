import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import styles from './index.module.less';
import Modal from '@src/components/Modal';
import useUpdateResumeHook from '../../useUpdateResumeHook';
import Input from '@src/components/input/Input';

interface IProps {
  onClose(): void;
}

export default function Work({ onClose }: IProps) {
  const updateWorkHook = useUpdateResumeHook('work');

  const { work } = useAppSelector((state) => {
    return { work: state.resume.resumeData.work };
  });
  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '关闭', callback: onClose, isShow: true }, submitBtn: { isShow: false } }}
      showFooter={true}
      title="求职意向"
    >
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>职 位 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateWorkHook('job', value);
              }}
              value={work?.job || ''}
              placeholder="求职岗位"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.leff}>
            <span className={styles.required}>*</span>城 市 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateWorkHook('city', value);
              }}
              value={work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear={true}
            />
            <div className={styles.tips}> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </Modal.Confirm>
  );
}
