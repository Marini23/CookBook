import { auth, facebookProvider, googleProvider } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { writeUserData } from './authOperationsFirebase';

// Email and password

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const { name, email, password } = credentials;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, { displayName: name });
      const user = auth.currentUser;
      writeUserData(user);

      const serializedUser = {
        name: user.displayName,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };

      return serializedUser;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const serializedUser = {
        name: user.displayName,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };
      return serializedUser;
    } catch (error) {
      console.log(error);
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    const serializedError = {
      code: error.code,
      message: error.message,
    };
    return thunkAPI.rejectWithValue(serializedError);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  (_, thunkAPI) => {
    return new Promise((resolve, reject) => {
      try {
        onAuthStateChanged(auth, user => {
          if (user === null) {
            reject('Unable to fetch user');
            console.log('Unable to fetch user');
          } else {
            console.log(user);
            const serializedUser = {
              name: user.displayName,
              email: user.email,
              accessToken: user.accessToken,
            };
            resolve(serializedUser);
          }
        });
      } catch (error) {
        const serializedError = {
          code: error.code,
          message: error.message,
        };
        return thunkAPI.rejectWithValue(serializedError);
      }
    });
  }
);

// Google auth

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, thunkAPI) => {
    try {
      await signInWithRedirect(auth, googleProvider);
      console.log('before');
      const result = await getRedirectResult(auth);
      console.log(result);
      const { user } = result;
      const serializedUser = {
        name: user.displayName,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };

      return serializedUser;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
        email: error.customData.email,
        credential: GoogleAuthProvider.credentialFromError(error),
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

// Facebook auth

export const signInWithFacebook = createAsyncThunk(
  'auth/signInWithFacebook',
  async (_, thunkAPI) => {
    try {
      await signInWithRedirect(auth, facebookProvider);
      const result = await getRedirectResult(auth);
      const { user } = result;

      const serializedUser = {
        name: user.displayName,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };

      return serializedUser;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
        email: error.customData.email,
        credential: FacebookAuthProvider.credentialFromError(error),
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);
