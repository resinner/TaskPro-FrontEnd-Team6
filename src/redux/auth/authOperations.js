import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://taskproapi-ukbi.onrender.com/";

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('api/users/register', credentials);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async(credentials, thunkAPI) => {
        try {
            const res = await axios.post('api/users/login', credentials);
            setToken(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('api/users/logout');
            unsetToken();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)