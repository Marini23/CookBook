import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logIn,
  logOut,
  register,
  signInWithFacebook,
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
    user: { name: null, email: null },
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
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        console.log(action.payload);
        set(ref(db, 'users/' + action.payload.id), {
          name: action.payload.name,
          email: action.payload.email,
          id: action.payload.id,
          // Add any other user data you want to store in the database
        });
      })
      .addCase(signInWithGoogle.rejected, handleRejected)
      .addCase(signInWithFacebook.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(signInWithFacebook.rejected, handleRejected)
      .addCase(linkMultipleAuth.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(linkMultipleAuthTest.fulfilled, (state, action) => {
        console.log(action.payload);
      }),
});

export const authReducer = authSlice.reducer;
