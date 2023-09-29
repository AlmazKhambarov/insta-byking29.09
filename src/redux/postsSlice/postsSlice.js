/** @format */
// this is comment toooooooooooooo

import { createSlice } from "@reduxjs/toolkit";
import { publishPosts } from "../extraReducer";
import { Flag, FlashOnTwoTone } from "@mui/icons-material";
const initialState = {
  loading: null,
  error: null,
  postLoading: null,
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
      // this is comment toooooooooooooo
  },
});
export const {} = postsSlice.actions;
export default postsSlice.reducer;
