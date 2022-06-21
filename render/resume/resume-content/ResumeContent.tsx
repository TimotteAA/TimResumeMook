import React, { useEffect, useState } from 'react';

import Scroll from '@src/components/scroll/Scroll';
import { TemplateOne } from './use-template/index';
import emitter from '@utils/events';

import { RESUME_TOOLBAR_MAPS } from '../resume-toolbar/mockData';
// 按钮modal
import Personal from './use-form/personal/Personal';
import Certificate from './use-form/certificate/Certificate';
import Contact from './use-form/contact/Contact';
import Education from './use-form/education/Education';
import Skill from './use-form/skill/Skill';
import Work from './use-form/work/Work';
import ProjectExperience from './use-form/project-experience/ProjectExperience';

export default function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  const [showModal, setShowModal] = useState(false);
  const [key, setKey] = useState('');

  useEffect(() => {
    const onFormShow = (key: string) => {
      setKey(key);
      setShowModal(true);
    };
    emitter.on('showModal', onFormShow);

    return () => {
      emitter.off('showModal');
    };
  }, []);

  // 点击modal的关闭按钮
  const onModalClose = () => {
    setShowModal(false);
    setKey('');
  };

  console.log(showModal && RESUME_TOOLBAR_MAPS.projectExperience === key);

  return (
    <Scroll maxHeight={height - HEADER_ACTION_HEIGHT} width={820}>
      <TemplateOne />
      {showModal && RESUME_TOOLBAR_MAPS.personal === key && <Personal onClose={onModalClose} />}
      {showModal && RESUME_TOOLBAR_MAPS.certificate === key && <Certificate onClose={onModalClose} />}
      {showModal && RESUME_TOOLBAR_MAPS.contact === key && <Contact onClose={onModalClose} />}
      {showModal && RESUME_TOOLBAR_MAPS.education === key && <Education onClose={onModalClose} />}
      {showModal && RESUME_TOOLBAR_MAPS.skill === key && <Skill onClose={onModalClose} />}
      {showModal && RESUME_TOOLBAR_MAPS.workPrefer === key && <Work onClose={onModalClose} />}
      {showModal && RESUME_TOOLBAR_MAPS.projectExperience === key && <ProjectExperience onClose={onModalClose} />}
    </Scroll>
  );
}
