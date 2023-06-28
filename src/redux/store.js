import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { menuModeReducer } from './menuMode/menuModeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menuMode: menuModeReducer,
  },
});
