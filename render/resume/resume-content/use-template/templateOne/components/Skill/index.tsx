/**
 * @desc 技能
 * @author pengdaokuan
 */
import React, { useMemo } from 'react';
import './index.normal.less';
import { useAppSelector } from '@utils/reduxHooks';

function Skill() {
  const { skill } = useAppSelector((state) => {
    return {
      skill: state.resume.resumeData.skill,
    };
  });

  const renderedSkillList = useMemo(() => {
    return skill.split('｜');
  }, [skill]);

  return (
    <div className="content">
      <p className="label">技能证书 Skill</p>
      <ul className="skill">
        {renderedSkillList.map((s) => {
          return (
            <li className="item" key={s}>
              {s}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skill;
