import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logIn,
  logOut,
  register,
  registerWithFacebook,
  registerWithGoogle,
  signInWithGoogle,
} from './authOperations';
import { db } from '../../firebase';
import { ref, set } from 'firebase/database';
import {
  linkMultipleAuth,
  linkMultipleAuthTest,
} from './authOperationsFirebase.js';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: { name: null, email: null, providerData: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.providerData = action.payload.providerData;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, providerData: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.providerData = action.payload.providerData;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(registerWithGoogle.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.providerData = action.payload.providerData;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(registerWithGoogle.rejected, handleRejected)
      .addCase(registerWithFacebook.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.providerData = action.payload.providerData;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(registerWithFacebook.rejected, handleRejected)
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        // state.user.name = action.payload.name;
        // state.user.email = action.payload.email;
        // state.user.providerData = action.payload.providerData;
        // state.token = action.payload.accessToken;
        // state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
