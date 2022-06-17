import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import WrapperExperience from '../wrapper-experience/WrapperExperience';
import Modal from '@src/components/Modal';
import Form from './form/Form';
import useUpdateResumeHook from '../../useUpdateResumeHook';
interface IProps {
  onClose(): void;
}
export default function ProjectExperience({ onClose }: IProps) {
  const updateProjectExperienceHook = useUpdateResumeHook('projectExperience');

  //   数据源
  const { projectExperience } = useAppSelector((state) => {
    return {
      projectExperience: state.resume.resumeData.projectExperience,
    };
  });

  //   更新数据源到redux里
  const updateDataList = (newDataList: any[]) => updateProjectExperienceHook('projectList', newDataList);

  return (
    <Modal.Confirm
      title="工作经验"
      config={{ cancelBtn: { text: '取消', callback: onClose, isShow: true } }}
      showFooter={true}
    >
      <WrapperExperience dataList={projectExperience} updateDataList={updateDataList} children={<Form />} />
    </Modal.Confirm>
  );
}
