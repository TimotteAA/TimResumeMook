import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import styles from './index.module.less';
import Modal from '@src/components/Modal';
import Input from '@src/components/input/Input';
import useUpdateResumeHook from '../../useUpdateResumeHook';

interface IProps {
  onClose(): void;
}

export default function Personal({ onClose }: IProps) {
  const updateBaseHook = useUpdateResumeHook('base');
  const updateHobbyHook = useUpdateResumeHook('hobby');

  const { hobby, base } = useAppSelector((state) => {
    return {
      hobby: state.resume.resumeData.hobby,
      base: state.resume.resumeData.base,
    };
  });

  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '取消', callback: onClose, isShow: true } }}
      showFooter={true}
      title="基本信息"
    >
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>姓 名:
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target.value;
                updateBaseHook('username', value);
              }}
              placeholder="请输入姓名"
              allowClear={true}
              value={base?.username || ''}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>籍 贯:
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateBaseHook('hometown', value);
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required} style={{ opacity: 0 }}>
              *
            </span>
            爱 好:
          </div>
          <div className={styles.right}>
            <Input
              type="textarea"
              onChange={(e) => {
                const value = e?.target?.value;
                updateHobbyHook('hobby', value);
              }}
              rows={5}
              value={hobby || ''}
              placeholder="你有什么特长爱好呢"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Confirm>
  );
}
