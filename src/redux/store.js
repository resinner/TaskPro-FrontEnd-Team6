import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
