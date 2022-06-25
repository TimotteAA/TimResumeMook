/**
 * @desc 模板1
 * @author pengdaokuan
 */
import React from 'react';
import './index.normal.less';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';
import { useAppSelector } from '@utils/reduxHooks';
import { RESUME_TOOLBAR_MAPS } from '@src/resume/resume-toolbar/mockData';

function TemplateOne() {
  const { addKeys, base } = useAppSelector((state) => {
    return {
      addKeys: state.resume.addKeys,
      base: state.resume.resumeData.base,
    };
  });

  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div className="a4-box">
      <div className="flex container" style={{ display: 'flex', flexDirection: 'row' }} id="pdf">
        {/* 左侧 */}
        <div className="left">
          <div className="avatar">
            <Avatar />
          </div>
          <div className="fillColor" />
          <div className="baseData">
            <BaseInfo />
            {addKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact />}
            {addKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job />}
            {addKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
          </div>
        </div>
        {/* 内容 */}
        <div className="center">
          {(addKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) || base?.username) && <Synopsis />}
          <div className="listData">
            {addKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {addKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {addKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {addKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
