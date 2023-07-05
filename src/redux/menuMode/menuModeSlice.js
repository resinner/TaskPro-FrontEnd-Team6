import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';

export const menuModeSlice = createSlice({
  name: 'menuMode',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    openMenuMode: state => {
      state.isMenuOpen = true;
    },
    closeMenuMode: state => {
      state.isMenuOpen = false;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(logOut.fulfilled, state => {
        state.isMenuOpen = false;
      });
  },
});

export const { openMenuMode, closeMenuMode } = menuModeSlice.actions;

export const menuModeReducer = menuModeSlice.reducer;
