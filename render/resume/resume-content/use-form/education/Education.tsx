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
  const updateBaseHook = useUpdateResumeHook('base');
  const { base } = useAppSelector((state) => {
    return {
      base: state.resume.resumeData.base,
    };
  });

  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '取消', callback: onClose, isShow: true } }}
      showFooter={true}
      title="教育经历（最高学历）"
    >
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>学 校 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateBaseHook('school', value);
              }}
              value={base?.school || ''}
              placeholder="请输入贵校"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>专 业 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateBaseHook('major', value);
              }}
              value={base?.major || ''}
              placeholder="请输入专业"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>学 位 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateBaseHook('degree', value);
              }}
              value={base?.degree || ''}
              placeholder="学士？硕士？博士？"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>学 年 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  beginTime: e.target.value,
                };
                updateBaseHook('onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.beginTime || ''}
              placeholder="2015.09.01"
              allowClear={true}
              style={{ width: 300 }}
            />
            <span className={styles.line}>-</span>
            <Input
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  endTime: e.target.value,
                };
                updateBaseHook('onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.endTime || ''}
              placeholder="2015.06.30"
              style={{ width: 300 }}
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Confirm>
  );
}
