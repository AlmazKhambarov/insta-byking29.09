/** @format */
// this is comment toooooooooooooo

import { createSlice } from "@reduxjs/toolkit";
import { chaneg, getUserPost, publishPosts } from "../extraReducer";
import { Flag, FlashOnTwoTone } from "@mui/icons-material";
const initialState = {
  loading: null,
  error: null,
  postLoading: null,
  isL:null,
  userPost:[]
};

const postsSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(publishPosts.pending, (state, action) => {
        state.loading = true;
        // this is comment toooooooooooooo
        state.postLoading = true;
      })
      // this is comment toooooooooooooo
      .addCase(publishPosts.fulfilled, (state, action) => {
        state.postLoading = false;
      })
      .addCase(publishPosts.rejected, (state, action) => {
        // this is comment toooooooooooooo
        state.error = action.error.message;
      });
      builder
      .addCase(chaneg.pending, (state, action) => {
        state.loading = true;
        // this is comment toooooooooooooo
        state.isL = true;
      })
      // this is comment toooooooooooooo
      .addCase(chaneg.fulfilled, (state, action) => {
        state.isL = false;
      })
      .addCase(chaneg.rejected, (state, action) => {
        // this is comment toooooooooooooo
        state.error = action.error.message;
      });

      builder
      .addCase(getUserPost.pending, (state, action) => {
        state.loading = true;
        // this is comment toooooooooooooo
      })
      // this is comment toooooooooooooo
      .addCase(getUserPost.fulfilled, (state, action) => {
        state.userPost = action.payload;
      })
      .addCase(getUserPost.rejected, (state, action) => {
        // this is comment toooooooooooooo
        state.error = action.error.message;
      });
      // this is comment toooooooooooooo
  },
});
export const {} = postsSlice.actions;
export default postsSlice.reducer;
