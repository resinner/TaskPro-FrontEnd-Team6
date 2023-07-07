import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const instance = axios.create({
  baseURL: 'https://taskproapi-ukbi.onrender.com/',
});

const setAuthHeader = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
};

const unsetAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = sessionStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('api/users/refresh', {
          refreshToken,
        });
        setAuthHeader(data.accessToken);
        sessionStorage.setItem('refreshToken', data.refreshToken);
        sessionStorage.setItem('accessToken', data.accessToken);
        error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post('api/users/register', credentials);
      if (res.status === 201) {
        const { email, password } = credentials;
        const { data } = await instance.post('api/users/login', {
          email,
          password,
        });
        setAuthHeader(data.accessToken);
        return data;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('api/users/login', credentials);

      setAuthHeader(data.accessToken);

      sessionStorage.setItem('refreshToken', data.refreshToken);
      sessionStorage.setItem('accessToken', data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('api/users/logout');
    sessionStorage.clear('refreshToken');
    sessionStorage.clear('accessToken');
    unsetAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const accessToken = await sessionStorage.getItem('accessToken');

    if (accessToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    setAuthHeader(accessToken);
    try {
      const { data } = await instance.get('api/users/current');
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  'auth/theme',
  async ({ theme }, thunkAPI) => {
    try {
      const { data } = await instance.patch('api/users/theme', { theme });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/prifile',
  async (credintials, thunkAPI) => {
    try {
      const { data } = await instance.put('api/users/profile', credintials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const needHelp = createAsyncThunk(
  'auth/needHelp',
  async (credintials, thunkAPI) => {
    try {
      const { data } = await instance.post('api/users/help', credintials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
