import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://taskproapi-ukbi.onrender.com/';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const unsetAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

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
    console.log(credintials);
    try {
      const { data } = await axios.put('api/users/prifile', credintials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const changeTheme = createAsyncThunk(
//   'auth/theme',
//   async ({ theme }, thunkAPI) => {
//     try {
//       const { data } = await axios.patch('api/users/theme', { theme });

//       return data;
//     } catch (error) {
//       console.log(thunkAPI.rejectWithValue(error.message));
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
