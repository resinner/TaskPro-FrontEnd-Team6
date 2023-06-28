import { createSlice } from '@reduxjs/toolkit';
import { getUser, updateUser } from './userOperations';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      // register
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // state.user.name = action.payload.name;
        // state.user.email = action.payload.email;
        state.user = action.payload;
      });
    // // theme changer
    // .addCase(changeTheme.fulfilled, (state, action) => {
    //   state.user.theme = action.payload.theme;
    // });
  },
});

export const userReducer = userSlice.reducer;
