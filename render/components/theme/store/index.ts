import { createSlice } from '@reduxjs/toolkit';

interface IState {
  currentTheme: Theme.Item;
  themeList: Theme.Item[];
}

const initialState: IState = {
  themeList: [],
  currentTheme: {
    id: '',
    fontColor: '',
    backgroundColor: '',
  },
};

const themeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.currentTheme = action.payload;
    },
    changeThemeList(state, action) {
      state.themeList = action.payload;
    },
  },
});

const { changeTheme, changeThemeList } = themeSlice.actions;
export { changeTheme, changeThemeList };
export default themeSlice.reducer;
