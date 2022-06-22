import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
import WrapperExperience from '../wrapper-experience/WrapperExperience';
import Modal from '@src/components/Modal';
import Form from './form/Form';
import AdapterExperience from '../wrapper-experience/adapter';
import useUpdateResumeHook from '../../useUpdateResumeHook';

interface IProps {
  onClose(): void;
}

export default function ProjectExperience({ onClose }: IProps) {
  const updateProjectExperienceHook = useUpdateResumeHook('schoolExperience');

  //   数据源
  const { schoolExperience } = useAppSelector((state) => {
    return {
      schoolExperience: state.resume.resumeData.schoolExperience,
    };
  });

  // 更新数据源到redux里
  const updateDataList = (newDataList: any[]) => {
    updateProjectExperienceHook('schoolExperience', newDataList);
  };

  return (
    <Modal.Confirm
      title="校园经理"
      config={{ cancelBtn: { text: '关闭', callback: onClose, isShow: true }, submitBtn: { isShow: false } }}
      showFooter={true}
      width={800}
    >
      <WrapperExperience
        dataList={AdapterExperience.school(schoolExperience)}
        updateDataList={updateDataList}
        children={<Form />}
      />
    </Modal.Confirm>
  );
}
