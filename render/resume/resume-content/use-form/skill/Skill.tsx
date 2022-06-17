import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import styles from './index.module.less';
import Modal from '@src/components/Modal';
import Input from '@src/components/input/Input';
import RecommendSkill from '@src/contansts/skill';

interface IProps {
  onClose(): void;
}

export default function Skill({ onClose }: IProps) {
  const { skill } = useAppSelector((state) => {
    return { skill: state.resume.resumeData.skill };
  });

  return (
    <Modal.Confirm
      config={{ cancelBtn: { text: '取消', callback: onClose, isShow: true } }}
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
                {RecommendSkill.map((skill) => {
                  return (
                    <div
                      className={styles.label}
                      key={skill.uid}
                      style={{
                        color: skill?.styles?.font,
                        borderColor: skill?.styles?.font,
                        backgroundColor: skill?.styles?.bg,
                      }}
                      onClick={() => {
                        const value = `${skill}${skill ? '｜' : ''}${skill.label}`;
                      }}
                    >
                      {skill.label}
                    </div>
                  );
                })}
              </div>
              <Input
                type="textarea"
                onChange={(e) => {}}
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
