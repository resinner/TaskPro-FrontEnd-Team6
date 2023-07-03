import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  changeTheme,
  updateUser,
  refreshCurrentUser,
} from './authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      // register
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      // login
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
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
      // refresh
      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      // user update
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, email, password, avatarURL } = action.payload;
        state.user.name = name;
        state.user.email = email;
        state.user.password = password;
        state.user.avatarURL = avatarURL;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
