import { createSlice } from '@reduxjs/toolkit';
import {
  getAllDashboards,
  addDashboard,
  deleteDashboard,
  getDashboardById,
  editDashbord,
  addColumn,
  deleteColumn,
  editColumn,
  addCard,
  deleteCard,
  editCard,
  changeColumn,
} from './dashboardsOperations';
import { logOut } from 'redux/auth/authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  dashboards: [],
  currentDashboard: {},
  isLoading: false,
  error: null,
  columnsLength: 0,
  currentBg: '',
  currentName: '',
  selectedPriority: 'show all',
};

const dashboardsSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {
    selectPriority(state, action) {
      state.selectedPriority = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getAllDashboards.pending, handlePending)
      .addCase(getAllDashboards.rejected, handleRejected)
      .addCase(getAllDashboards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboards = action.payload;
        state.error = null;
      })

      .addCase(addDashboard.pending, handlePending)
      .addCase(addDashboard.rejected, handleRejected)
      .addCase(addDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboards.push(action.payload);
        state.error = null;
      })

      .addCase(deleteDashboard.pending, handlePending)
      .addCase(deleteDashboard.rejected, handleRejected)
      .addCase(deleteDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.dashboards.findIndex(
          item => item._id === action.payload.deletedBoard._id
        );

        state.dashboards.splice(index, 1);
      })

      .addCase(logOut.fulfilled, state => {
        state.dashboards = [];
        state.error = null;
        state.isLoading = false;
        state.currentDashboard = {};
      })

      .addCase(getDashboardById.pending, handlePending)
      .addCase(getDashboardById.rejected, handleRejected)
      .addCase(getDashboardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentDashboard = action.payload;
        state.error = null;

        state.currentBg = action.payload?.dashboard?.backgroundURL;
        state.currentName = action.payload?.dashboard?.name;
        state.columnsLength = action.payload?.columns?.length;
        state.selectedPriority = 'show all';
      })

      .addCase(editDashbord.pending, handlePending)
      .addCase(editDashbord.rejected, handleRejected)
      .addCase(editDashbord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id, name, icon, backgroundURL } = action.payload;

        const dashboardIndex = state.dashboards.findIndex(
          item => item._id === _id
        );

        state.dashboards[dashboardIndex] = {
          ...state.dashboards[dashboardIndex],
          name,
          icon,
          backgroundURL,
        };
        state.currentName = name;
        state.currentBg = backgroundURL;
      })

      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentDashboard.columns.push(action.payload);
        state.error = null;
        state.columnsLength = state.currentDashboard.columns.length;
      })

      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.rejected, handleRejected)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload._id
        );

        state.currentDashboard.columns.splice(index, 1);
        state.columnsLength = state.currentDashboard.columns.length;
      })

      .addCase(editColumn.pending, handlePending)
      .addCase(editColumn.rejected, handleRejected)
      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { _id, title } = action.payload;

        const columnIndex = state.currentDashboard.columns.findIndex(
          item => item._id === _id
        );

        state.currentDashboard.columns[columnIndex].title = title;
      })

      .addCase(addCard.pending, handlePending)
      .addCase(addCard.rejected, handleRejected)
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.owner
        );

        if (!state.currentDashboard.columns[index].cards) {
          state.currentDashboard.columns[index].cards = [];
        }

        state.currentDashboard.columns[index].cards.push(action.payload);

        state.error = null;
      })

      .addCase(deleteCard.pending, handlePending)
      .addCase(deleteCard.rejected, handleRejected)
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const indexColumn = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.owner
        );

        const indexCard = state.currentDashboard.columns[
          indexColumn
        ].cards.findIndex(item => item._id === action.payload._id);

        state.currentDashboard.columns[indexColumn].cards.splice(indexCard, 1);
        state.columnsLength = state.currentDashboard.columns.length;
      })

      .addCase(editCard.pending, handlePending)
      .addCase(editCard.rejected, handleRejected)
      .addCase(editCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { _id, title, description, priority, deadline, owner } =
          action.payload;

        const indexColumn = state.currentDashboard.columns.findIndex(
          item => item._id === owner
        );

        const indexCard = state.currentDashboard.columns[
          indexColumn
        ].cards.findIndex(item => item._id === _id);

        state.currentDashboard.columns[indexColumn].cards[indexCard] = {
          ...state.currentDashboard.columns[indexColumn].cards[indexCard],
          title,
          description,
          priority,
          deadline,
        };
        state.columnsLength = state.currentDashboard.columns.length;
      })

      .addCase(changeColumn.pending, handlePending)
      .addCase(changeColumn.rejected, handleRejected)
      .addCase(changeColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const currenColumn = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.currentOwner
        );

        const incomingColumn = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.columnId
        );

        const indexCard = state.currentDashboard.columns[
          currenColumn
        ].cards.findIndex(item => item._id === action.payload.data._id);

        const position = state.currentDashboard.columns[
          currenColumn
        ].cards.findIndex(item => item);

        state.currentDashboard.columns[currenColumn].cards.splice(indexCard, 1);

        if (!state.currentDashboard.columns[incomingColumn].cards) {
          state.currentDashboard.columns[incomingColumn].cards = [];
        }

        state.currentDashboard.columns[incomingColumn].cards?.splice(
          position,
          0,
          action.payload.data
        );
      });
  },
});

export const { selectPriority } = dashboardsSlice.actions;

export const dashboardsReducer = dashboardsSlice.reducer;
