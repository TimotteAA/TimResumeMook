import { useAppSelector, useAppDispatch } from '@utils/reduxHooks';

import {
  changeBase,
  changeHobby,
  changeContact,
  changeCertificate,
  changeWork,
  changeProjectList,
} from '@src/resume/store';

// 派发更新逻辑
export default function useUpdateResumeHook(dataKey: string) {
  const updatePersonalHook = useUpdatePersonalHook();
  const updateHobbtHook = useUpdateHobbyHook();
  const updateContactHook = useUpdateContactHook();
  const updateCertificateHook = useUpdateCertificateHook();
  const updateWorkHook = useUpdateWorkHook();
  const updateProjectExperience = useUpdateProjectExperienceHook();

  //   const updateContactHook = useUpdateContactHook();
  //   const updateWorkHook = useUpdateWorkHook();
  //   const updateEvaluationHook = useUpdateEvaluationHook();
  //   const updateHobbyHook = useUpdateHobbyHook();
  //   const updateCertificateHook = useUpdateCertificateHook();
  //   const updateSkillHook = useUpdateSkillHook();
  //   const updateProjectExperience = useUpdateProjectExperience();
  //   const updateSchoolExperience = useUpdateSchoolExperience();
  //   const updateWorkExperience = useUpdateWorkExperience();

  return <T>(key: string, stateValue: T) => {
    //   if (keys[0] === 'base') updatePersonalHook(keys[1], stateValue);
    //   if (keys[0] === 'contact') updateContactHook(keys[1], stateValue);
    //   if (keys[0] === 'work') updateWorkHook(keys[1], stateValue);
    //   if (keys[0] === 'evaluation') updateEvaluationHook(keys[0], stateValue);
    //   if (keys[0] === 'hobby') updateHobbyHook(keys[0], stateValue);
    //   if (keys[0] === 'certificate') updateCertificateHook(keys[0], stateValue);
    //   if (keys[0] === 'skill') updateSkillHook(keys[0], stateValue);
    //   if (keys[0] === 'projectExperience') updateProjectExperience(keys[0], stateValue);
    //   if (keys[0] === 'schoolExperience') updateSchoolExperience(keys[0], stateValue);
    //   if (keys[0] === 'workExperience') updateWorkExperience(keys[0], stateValue);
    switch (dataKey) {
      case 'base': {
        updatePersonalHook(key, stateValue);
        return;
      }
      case 'hobby': {
        updateHobbtHook(key, stateValue);
        return;
      }
      case 'contact': {
        updateContactHook(key, stateValue);
        return;
      }
      case 'certificate': {
        updateCertificateHook(key, stateValue);
        return;
      }
      case 'work': {
        updateWorkHook(key, stateValue);
        return;
      }
      case 'projectExperience': {
        updateProjectExperience(key, stateValue);
        return;
      }
    }
  };
}

function useUpdatePersonalHook() {
  const dispatch = useAppDispatch();

  const base = useAppSelector((state) => state.resume.resumeData.base);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(
      changeBase({
        ...base,
        [stateKey]: stateValue,
      })
    );
  };
}

function useUpdateHobbyHook() {
  const dispatch = useAppDispatch();

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(changeHobby(stateValue));
  };
}

function useUpdateContactHook() {
  const dispatch = useAppDispatch();
  const contact = useAppSelector((state) => state.resume.resumeData.contact);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(
      changeContact({
        ...contact,
        [stateKey]: stateValue,
      })
    );
  };
}

function useUpdateCertificateHook() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    console.log(stateValue);
    dispatch(changeCertificate(stateValue));
  };
}

function useUpdateWorkHook() {
  const dispatch = useAppDispatch();
  const work = useAppSelector((state) => state.resume.resumeData.work);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(
      changeWork({
        ...work,
        [stateKey]: stateValue,
      })
    );
  };
}

function useUpdateProjectExperienceHook() {
  const dispatch = useAppDispatch();
  // const projectExperience = useAppSelector((state) => state.resume.resumeData.projectExperience);

  return <T>(stateKey: string, stateValue: T) => {
    console.log(stateValue);

    dispatch(changeProjectList(stateValue));
  };
}
