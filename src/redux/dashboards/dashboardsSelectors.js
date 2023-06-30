export const selectAllDashboards = state => state.dashboards.dashboards;

export const selectCurrentDashboard = state =>
  state.dashboards.currentDashboard.dashboard;

export const selectColumns = state => state.dashboards.currentDashboard.columns;

export const selectColumnsLength = state => state.dashboards.columnsLength;
