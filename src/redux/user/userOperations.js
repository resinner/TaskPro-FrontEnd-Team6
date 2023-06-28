import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/prifile',
  async (credintials, thunkAPI) => {
    try {
      const { data } = await axios.put('api/users/prifile', credintials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
