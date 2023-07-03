import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ dashboardId, title, owner }, thunkAPI) => {
    try {
      const { data } = await instance.post(`api/column/${dashboardId}`, {
        title,
        owner,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
