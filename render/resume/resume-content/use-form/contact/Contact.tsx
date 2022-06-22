import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import styles from './index.module.less';
import Modal from '@src/components/Modal';
import Input from '@src/components/input/Input';
import useUpdateResumeHook from '../../useUpdateResumeHook';

interface IProps {
  onClose(): void;
}

export default function Contact({ onClose }: IProps) {
  const updateContactHook = useUpdateResumeHook('contact');
  const { contact } = useAppSelector((state) => {
    return {
      contact: state.resume.resumeData.contact,
    };
  });

  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '关闭', callback: onClose, isShow: true }, submitBtn: { isShow: false } }}
      showFooter={true}
      title="联系方式"
    >
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>电 话 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                console.log(value);
                updateContactHook('phone', value);
              }}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>邮 箱 ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateContactHook('email', value);
              }}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required} style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateContactHook('github', value);
              }}
              value={contact?.github || ''}
              placeholder="Github 地址"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required} style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => {
                const value = e?.target?.value;
                updateContactHook('juejin', value);
              }}
              value={contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Confirm>
  );
}
