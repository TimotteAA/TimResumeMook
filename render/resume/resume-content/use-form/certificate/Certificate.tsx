import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import Input from '@src/components/input/Input';
import useUpdateResumeHook from '../../useUpdateResumeHook';
import Modal from '@src/components/Modal';

import styles from './index.module.less';

interface IProps {
  onClose(): void;
}

export default function Certificate({ onClose }: IProps) {
  const updateCertificateHook = useUpdateResumeHook('certificate');
  const { certificate } = useAppSelector((state) => {
    return {
      certificate: state.resume.resumeData.certificate,
    };
  });

  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '关闭', callback: onClose, isShow: true }, submitBtn: { isShow: false } }}
      showFooter={true}
      title="荣誉证书"
    >
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.required}>*</span>证 书 ：
          </div>
          <div className={styles.right}>
            <Input
              type="textarea"
              onChange={(e) => {
                const value = e?.target?.value;

                updateCertificateHook('certificate', value);
              }}
              rows={5}
              value={certificate || ''}
              placeholder="互联网+大赛一等奖｜掘金大学骰王｜互联网喝酒大赛进步奖"
              allowClear={true}
            />
            <div className={styles.tips}> * 多个证书请以｜分割</div>
          </div>
        </div>
      </div>
    </Modal.Confirm>
  );
}
