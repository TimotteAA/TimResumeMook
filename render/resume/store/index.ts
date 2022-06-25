import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userResume from '../mockData/mockData';

type InitialStateType = {
  title: string;
  addKeys: string[];
  resumeData: typeof userResume;
};

const initialState: InitialStateType = {
  title: 'redux配置测试',
  addKeys: [],
  resumeData: userResume,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    addKeys(state, action) {
      state.addKeys = action.payload;
    },
    changeBase(state, action) {
      state.resumeData.base = action.payload;
    },
    changeHobby(state, action) {
      state.resumeData.hobby = action.payload;
    },
    changeContact(state, action) {
      state.resumeData.contact = action.payload;
    },
    changeCertificate(state, action) {
      state.resumeData.certificate = action.payload;
    },
    changeWork(state, action) {
      state.resumeData.work = action.payload;
    },
    changeProjectList(state, action) {
      state.resumeData.projectExperience = action.payload;
    },
    changeWorkList(state, action) {
      state.resumeData.workExperience = action.payload;
    },
    changeSchoolList(state, action) {
      state.resumeData.schoolExperience = action.payload;
    },
    changeSkill(state, action) {
      state.resumeData.skill = action.payload;
    },
    changeEvaluation(state, action) {
      state.resumeData.evaluation = action.payload;
    },
    changeResumeData(state, action) {
      state.resumeData = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

const {
  addKeys,
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
  changeResumeData,
} = resumeSlice.actions;
export {
  addKeys as addKeysAction,
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
  changeResumeData,
};
export default resumeSlice.reducer;
