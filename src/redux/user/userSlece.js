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
      // get user
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      // edit user profile
      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, email, password, avatarURL } = action.payload;
        state.user.name = name;
        state.user.email = email;
        state.user.password = password;
        state.user.avatarURL = avatarURL;
      });
  },
});

export const userReducer = userSlice.reducer;
