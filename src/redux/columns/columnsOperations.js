import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ dashboardId, title, owner }, thunkAPI) => {
    try {
      const { data } = await axios.post(`api/column/${dashboardId}`, {
        title,
        owner,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
