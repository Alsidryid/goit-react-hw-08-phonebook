export const selectAuthLoading = state => state.auth.loading;

export const selectAuthError = state => state.auth.error;

export const selectAuthLogin = state => state.auth.isLogin;

export const selectAuthName = state => state.auth.user.name;

export const selectAuthToken = state => state.auth.token;
