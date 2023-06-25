import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 0,
  },
  reducers: {
    setActiveTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setActiveTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
