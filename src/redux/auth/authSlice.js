import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  changeTheme,
  updateUser,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    theme: null,
    avatarURL: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      // register
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      // login
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // logout
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      // theme changer
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, email, password, avatarURL } = action.payload;
        state.user.name = name;
        state.user.email = email;
        state.user.password = password;
        state.user.avatarURL = avatarURL;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      });
  },
});

export const authReducer = authSlice.reducer;
