import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import styles from './index.module.less';
import Modal from '@src/components/Modal';
import Input from '@src/components/input/Input';
import RecommendSkill from '@src/contansts/skill';
import useUpdateResumeHook from '../../useUpdateResumeHook';

interface IProps {
  onClose(): void;
}

export default function Skill({ onClose }: IProps) {
  const updateProjectExperienceHook = useUpdateResumeHook('skill');
  const { skill } = useAppSelector((state) => {
    return { skill: state.resume.resumeData.skill };
  });
  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '关闭', callback: onClose, isShow: true }, submitBtn: { isShow: false } }}
      showFooter={true}
      title="技能"
    >
      <div>
        <div className={styles.form}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <span className={styles.required} style={{ opacity: 0 }}>
                *
              </span>
              技 能 ：
            </div>
            <div className={styles.right}>
              <div className={styles.action}>
                {RecommendSkill.map((s) => {
                  return (
                    <div
                      className={styles.label}
                      key={s.uid}
                      style={{
                        color: s?.styles?.font,
                        borderColor: s?.styles?.font,
                        backgroundColor: s?.styles?.bg,
                      }}
                      onClick={() => {
                        const value = `${skill}${skill ? '｜' : ''}${s.label}`;
                        console.log(value);
                        updateProjectExperienceHook('skill', value);
                      }}
                    >
                      {s.label}
                    </div>
                  );
                })}
              </div>
              <Input
                type="textarea"
                onChange={(e) => {
                  const value = e.target.value;
                  updateProjectExperienceHook('skill', value);
                }}
                rows={5}
                value={skill}
                placeholder="例如 Vue、React"
                allowClear={true}
              />
              <div className={styles.tips}> * 多个技能以 | 分割</div>
            </div>
          </div>
        </div>
      </div>
    </Modal.Confirm>
  );
}
