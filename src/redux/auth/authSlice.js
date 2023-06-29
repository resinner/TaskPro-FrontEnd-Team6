import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, changeTheme } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    theme: null,
  },
  token: null,
  isLoggedIn: false,
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
      });
  },
});

export const authReducer = authSlice.reducer;
