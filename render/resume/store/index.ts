import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type InitialStateType = {
  title: string;
};

const initialState: InitialStateType = {
  title: 'redux配置测试',
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getTagsAction.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(
    //   getTagsAction.fulfilled,
    //   (state, { payload }: { payload: any }) => {
    //     state.loading = false;
    //     const tags = parseTags(payload.sub);
    //     state.tags = tags;
    //   }
    // );
    // builder.addCase(getTagsAction.rejected, (state) => {
    //   state.loading = false;
    //   // console.log(action);
    // });
    // builder.addCase(getGoodAlbumsAction.pending, (state) => {
    //   state.loading = true;
    // });
  },
});

export default resumeSlice.reducer;
