import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logIn,
  logOut,
  register,
  registerWithFacebook,
  registerWithGoogle,
  signInWithFacebook,
  signInWithGoogle,
} from './authOperations';

const handleRejected = (state, action) => {
  const errorPayload = action.payload;
  console.log(errorPayload);

  state.isLoading = false;
  // state.error = serializedError;
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
        state.user.providerData = action.payload.providerData;
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
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.providerData = action.payload.providerData;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signInWithGoogle.rejected, handleRejected)
      .addCase(signInWithFacebook.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.providerData = action.payload.providerData;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signInWithFacebook.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
