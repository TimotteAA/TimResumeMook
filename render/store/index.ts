import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from '@src/resume/store/index';
import themeSlice from '@src/components/theme/store';

export const store = configureStore({
  reducer: { resume: resumeSlice, theme: themeSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
