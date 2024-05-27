export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectErrorAuth = state => state.auth.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
