import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});
