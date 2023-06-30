import { createSlice } from '@reduxjs/toolkit';
import { addColumn } from './columnsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    columns: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.columns.push(action.payload);
        state.error = null;
      });

  },
});

export const columnsReducer = columnsSlice.reducer;
