import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';

// dashboards
export const getAllDashboards = createAsyncThunk(
  'dashboards/fetchAllDashboards',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('api/dashboard');
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
      const { data } = await instance.post('api/dashboard', {
        name,
        icon,
        backgroundURL,
        owner,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDashboard = createAsyncThunk(
  'dashboards/deleteDashboard',
  async (dashboardId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`api/dashboard/${dashboardId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDashboardById = createAsyncThunk(
  'dashboards/getById',
  async (dashboardId, thunkAPI) => {
    try {
      const { data } = await instance.get(`api/dashboard/${dashboardId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editDashbord = createAsyncThunk(
  'dashboards/editDashbord',
  async ({ dashboardId, updatedData }, thunkAPI) => {
    try {
      const { data } = await instance.put(
        `api/dashboard/${dashboardId}`,
        updatedData
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// column
export const addColumn = createAsyncThunk(
  'dashboards/addColumn',
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

export const deleteColumn = createAsyncThunk(
  'dashboards/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`api/column/${columnId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'dashboards/editColumn',
  async ({ columnId, title }, thunkAPI) => {
    try {
      const { data } = await instance.put(`api/column/${columnId}`, { title });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'dashboards/addCard',
  async (
    { columnId, title, description, priority, deadline, owner },
    thunkAPI
  ) => {
    try {
      const { data } = await instance.post(`api/card/${columnId}`, {
        title,
        description,
        priority,
        deadline,
        owner,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'dashboards/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`api/card/${cardId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'dashboards/editCard',
  async (
    { cardId, title, description, priority, deadline, owner },
    thunkAPI
  ) => {
    try {
      const { data } = await instance.put(`api/card/${cardId}`, {
        title,
        description,
        priority,
        deadline,
        owner,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeColumn = createAsyncThunk(
  'dashboards/changeColumn',
  async ({ cardId, columnId, currentOwner }, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        `/api/card/${cardId}/owner/${columnId}`
      );

      return { data, columnId, currentOwner };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
