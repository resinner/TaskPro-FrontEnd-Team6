import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllDashboards = createAsyncThunk(
  'dashboards/fetchAllDashboards',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('api/dashboard');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDashboard = createAsyncThunk(
  'dashboards/addDashboard',
  async ({ name, icon, backgroundURL, owner }, thunkAPI) => {
    try {
      const response = await axios.post('api/dashboard', {
        name,
        icon,
        backgroundURL,
        owner,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDashboard = createAsyncThunk(
  'dashboards/deleteDashboard',
  async (dashboardId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/dashboard/${dashboardId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
