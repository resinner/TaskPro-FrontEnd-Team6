import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { menuModeReducer } from './menuMode/menuModeSlice';
import { userReducer } from './user/userSlece';
import { dashboardsReducer } from './dashboards/dashboardsSlice';
// import { columnsReducer } from './columns/columnsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menuMode: menuModeReducer,
    user: userReducer,
    dashboards: dashboardsReducer,
    // columns: columnsReducer,
  },
});
