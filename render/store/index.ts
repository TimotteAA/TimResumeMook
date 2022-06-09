import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from '@src/resume/store/index';

export const store = configureStore({
  reducer: { resume: resumeSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
