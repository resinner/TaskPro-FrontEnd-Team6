export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserTheme = state => state.auth.user.theme;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;
