import { useAppSelector, useAppDispatch } from '@utils/reduxHooks';

import {
  changeBase,
  changeHobby,
  changeContact,
  changeCertificate,
  changeWork,
  changeProjectList,
  changeWorkList,
  changeSchoolList,
  changeSkill,
  changeEvaluation,
} from '@src/resume/store';

// 派发更新逻辑
export default function useUpdateResumeHook(dataKey: string) {
  const updatePersonalHook = useUpdatePersonalHook();
  const updateHobbtHook = useUpdateHobbyHook();
  const updateContactHook = useUpdateContactHook();
  const updateCertificateHook = useUpdateCertificateHook();
  const updateWorkHook = useUpdateWorkHook();
  const updateSkillHook = useUpdateSkillHook();
  const updateProjectExperience = useUpdateProjectExperienceHook();
  const updateWorkExperience = useUpdateWorkExperienceHook();
  const updateSchoolExperience = useUpdateSchoolExperienceHook();
  const updateEvaluation = useUpdateEvaluationHook();

  return <T>(key: string, stateValue: T) => {
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
      case 'skill': {
        updateSkillHook(key, stateValue);
        return;
      }
      case 'projectExperience': {
        updateProjectExperience(key, stateValue);
        return;
      }
      case 'workExperience': {
        updateWorkExperience(key, stateValue);
        return;
      }
      case 'schoolExperience': {
        updateSchoolExperience(key, stateValue);
        return;
      }
      case 'evaluation': {
        updateEvaluation(key, stateValue);
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

function useUpdateEvaluationHook() {
  const dispatch = useAppDispatch();

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(changeEvaluation(stateValue));
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

function useUpdateSkillHook() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    dispatch(changeSkill(stateValue));
  };
}

function useUpdateProjectExperienceHook() {
  const dispatch = useAppDispatch();
  // const projectExperience = useAppSelector((state) => state.resume.resumeData.projectExperience);

  return <T>(_: string, stateValue: T) => {
    console.log(stateValue);

    dispatch(changeProjectList(stateValue));
  };
}

function useUpdateWorkExperienceHook() {
  const dispatch = useAppDispatch();
  // const projectExperience = useAppSelector((state) => state.resume.resumeData.projectExperience);

  return <T>(_: string, stateValue: T) => {
    dispatch(changeWorkList(stateValue));
  };
}

function useUpdateSchoolExperienceHook() {
  const dispatch = useAppDispatch();
  // const projectExperience = useAppSelector((state) => state.resume.resumeData.projectExperience);

  return <T>(_: string, stateValue: T) => {
    dispatch(changeSchoolList(stateValue));
  };
}
