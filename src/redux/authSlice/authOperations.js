import { auth, facebookProvider, googleProvider } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  linkWithPopup,
  EmailAuthProvider,
  linkWithCredential,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  HandleErrorExistWithDifCred,
  checkIfLinked,
  getUserData,
  updateUser,
  writeUserData,
} from './authOperationsFirebase';

// Register with Email and password

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
        providerData: user.providerData,
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

// Sign in with Email and password

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const currentUser = auth.currentUser;
      const { email, password } = credentials;
      if (currentUser) {
        const providerIndex = checkIfLinked(currentUser, 'password');
        if (providerIndex !== -1) {
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
        } else {
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
        }
      } else {
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
      }
    } catch (error) {
      console.log(error);
      const serializedError = {
        code: error.code,
        message: error.message,
        credential: EmailAuthProvider.credentialFromError(error),
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
            const serializedUser = {
              name: user.displayName,
              email: user.email,
              providerData: user.providerData,
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

// Register with Google

export const registerWithGoogle = createAsyncThunk(
  'auth/registerWithGoogle',
  async (_, thunkAPI) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      // Write user data
      writeUserData(user);

      // Serialize user data
      const serializedUser = {
        name: user.displayName,
        email: user.email,
        providerData: user.providerData,
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

// Register with Facebook

export const registerWithFacebook = createAsyncThunk(
  'auth/registerWithFacebook',
  async (_, thunkAPI) => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const user = result.user;

      // Write user data
      writeUserData(user);

      // Serialize user data
      const serializedUser = {
        name: user.displayName,
        email: user.email,
        providerData: user.providerData,
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

// sign in  with Google

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, thunkAPI) => {
    try {
      // Get reference to the currently signed-in user
      const user = auth.currentUser;
      if (user) {
        const providerIndex = checkIfLinked(user, 'google.com');

        if (providerIndex !== -1) {
          // User is already linked with Google, so just sign in
          const result = await signInWithPopup(auth, googleProvider);
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          await updateProfile(user, { displayName: user.displayName });
          // Update user data
          await updateUser(user);
          const serializedUser = {
            name: user.displayName,
            email: user.email,
            providerData: user.providerData,
            accessToken: user.stsTokenManager.accessToken,
          };
          return serializedUser;
        } else {
          // Link the user with Google
          const result = await linkWithPopup(auth.currentUser, googleProvider);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential);
          const user = result.user;
          await updateProfile(user, { displayName: user.displayName });
          // Update user data
          console.log(user.displayName);
          await updateUser(user);
          const serializedUser = {
            name: user.displayName,
            email: user.email,
            providerData: user.providerData,
            accessToken: user.stsTokenManager.accessToken,
          };

          return serializedUser;
        }
      } else {
        // User is not signed in, so sign in with Google
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const pendingCredString = localStorage.getItem('pendingCredential');
        const pendingCred = JSON.parse(pendingCredString);
        console.log(pendingCred);
        if (pendingCred) {
          console.log('aaa');
          // As you have access to the pending credential, you can directly call the
          // link method.
          await linkWithCredential(user, pendingCred);
          console.log('bbb');
          // Clear the pending credential from localStorage after use
          localStorage.removeItem('pendingCredential');
        }
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);

        // Get user data
        const userIsExist = getUserData(user);
        if (userIsExist) {
          console.log('exist');
          await updateUser(user);
        } else {
          console.log('no exist');
          writeUserData(user);
        }

        const serializedUser = {
          name: user.displayName,
          email: user.email,
          providerData: user.providerData,
          accessToken: user.stsTokenManager.accessToken,
        };

        return serializedUser;
      }
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

// sign in  with Facebook

export const signInWithFacebook = createAsyncThunk(
  'auth/signInWithFacebook',
  async (_, thunkAPI) => {
    try {
      // Get reference to the currently signed-in user
      const user = auth.currentUser;
      if (user) {
        const providerIndex = checkIfLinked(user, 'facebook.com');
        console.log(providerIndex);
        if (providerIndex !== -1) {
          const result = await signInWithPopup(auth, facebookProvider);
          const credential = FacebookAuthProvider.credentialFromResult(result);
          console.log(credential);
          const user = result.user;
          await updateProfile(user, { displayName: user.displayName });
          // Update user data
          console.log(user.displayName);
          await updateUser(user);
          const serializedUser = {
            name: user.displayName,
            email: user.email,
            providerData: user.providerData,
            accessToken: user.stsTokenManager.accessToken,
          };

          return serializedUser;
        } else {
          const result = await linkWithPopup(
            auth.currentUser,
            facebookProvider
          );
          const credential = FacebookAuthProvider.credentialFromResult(result);
          console.log(credential);
          const user = result.user;
          await updateProfile(user, { displayName: user.displayName });
          // Update user data
          console.log(user.displayName);
          await updateUser(user);
          const serializedUser = {
            name: user.displayName,
            email: user.email,
            providerData: user.providerData,
            accessToken: user.stsTokenManager.accessToken,
          };

          return serializedUser;
        }
      } else {
        const result = await signInWithPopup(auth, facebookProvider);
        const credential = facebookProvider.credentialFromResult(result);
        console.log(credential);
        const user = result.user;
        // Get user data
        const userIsExist = getUserData(user);
        if (userIsExist) {
          console.log('exist');
          await updateUser(user);
        } else {
          console.log('no exist');
          writeUserData(user);
        }

        const serializedUser = {
          name: user.displayName,
          email: user.email,
          providerData: user.providerData,
          accessToken: user.stsTokenManager.accessToken,
        };

        return serializedUser;
      }
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        console.log('auth/account-exists-with-different-credential');
        // The pending Facebook credential.

        let pendingCred = FacebookAuthProvider.credentialFromError(error);
        console.log(pendingCred);
        // Step 3: Save the pending credential in temporary storage,
        localStorage.setItem('pendingCredential', JSON.stringify(pendingCred));
        // Step 4: Let the user know that they already have an account
        // but with a different provider, and let them choose another
        // sign-in method.
      }
      const serializedError = {
        code: error.code,
        message: error.message,
        email: error.customData.email,
        credential: error.credential
          ? {
              providerId: error.credential.providerId,
              signInMethod: error.credential.signInMethod,
              accessToken: error.credential.accessToken,
            }
          : null,
      };
      console.log(serializedError);
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);