import { createSlice } from '@reduxjs/toolkit';

export const menuModeSlice = createSlice({
  name: 'menuMode',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenuMode: state => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenuMode: state => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenuMode, closeMenuMode } = menuModeSlice.actions;

export const menuModeReducer = menuModeSlice.reducer;
