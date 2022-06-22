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
  const updateWorkExperienceHook = useUpdateResumeHook('workExperience');

  // 数据源
  const { workExperience } = useAppSelector((state) => {
    return {
      workExperience: state.resume.resumeData.workExperience,
    };
  });

  // 更新数据源到redux里
  const updateDataList = (newDataList: any[]) => {
    updateWorkExperienceHook('workList', newDataList);
  };

  return (
    <Modal.Confirm
      title="工作、实习经验"
      config={{ cancelBtn: { text: '关闭', callback: onClose, isShow: true }, submitBtn: { isShow: false } }}
      showFooter={true}
      width={800}
    >
      <WrapperExperience
        dataList={AdapterExperience.work(workExperience)}
        updateDataList={updateDataList}
        children={<Form />}
      />
    </Modal.Confirm>
  );
}
