import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, current, logOut } from './auth-operations';
const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};
const pending = state => {
  state.loading = true;
};

const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, pending)
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(signUp.rejected, rejected)
      .addCase(logIn.pending, pending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.loading = false;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(logIn.rejected, rejected)
      .addCase(current.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(current.rejected, state => {
        state.loading = false;
        state.token = '';
      })
      .addCase(logOut.pending, pending)
      .addCase(logOut.fulfilled, state => {
        state.loading = false;
        state.isLogin = false;
        state.error = null;
        state.user = {};
        state.token = '';
      })
      .addCase(logOut.rejected, rejected);
  },
});

export default authSlice.reducer;
