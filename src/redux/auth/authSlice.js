import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  changeTheme,
  updateUser,
  refreshCurrentUser,
  needHelp,
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

      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(changeTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })

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

      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, email, password, avatarURL } = action.payload;
        state.user.name = name;
        state.user.email = email;
        state.user.password = password;
        state.user.avatarURL = avatarURL;
        state.isLoading = false;
      })

      .addCase(needHelp.rejected, handleRejected)
      .addCase(needHelp.pending, handlePending)
      .addCase(needHelp.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
