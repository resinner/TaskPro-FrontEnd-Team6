import { createSlice } from '@reduxjs/toolkit';
import {
  getAllDashboards,
  addDashboard,
  deleteDashboard,
} from './dashboardsOperations';
import { logOut } from 'redux/auth/authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const dashboardsSlice = createSlice({
  name: 'dashboards',
  initialState: {
    dashboards: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // fetch contacts
      .addCase(getAllDashboards.pending, handlePending)
      .addCase(getAllDashboards.rejected, handleRejected)
      .addCase(getAllDashboards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboards = action.payload;
        state.error = null;
      })
      // add contact
      .addCase(addDashboard.pending, handlePending)
      .addCase(addDashboard.rejected, handleRejected)
      .addCase(addDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboards.push(action.payload);
        state.error = null;
        console.log(state.dashboards);
      })
      //  delete contact
      .addCase(deleteDashboard.pending, handlePending)
      .addCase(deleteDashboard.rejected, handleRejected)
      .addCase(deleteDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.dashboards.findIndex(
          item => item._id === action.payload
        );

        console.log(index);

        state.dashboards.splice(index, 1);
      })
      // log out
      .addCase(logOut.fulfilled, state => {
        state.dashboards = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const dashboardsReducer = dashboardsSlice.reducer;
