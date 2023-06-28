import { createSlice } from '@reduxjs/toolkit';

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
});

export const { openMenuMode, closeMenuMode } = menuModeSlice.actions;

export const menuModeReducer = menuModeSlice.reducer;
