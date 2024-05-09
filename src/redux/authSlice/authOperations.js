import { auth, facebookProvider, googleProvider } from '../../firebase';
import { db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithCredential,
  OAuthProvider,
  linkWithCredential,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MyUserDatabase from './MyUserDataBase';
import { ref, set } from 'firebase/database';

// Email and password

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { name, email, password } = credentials;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, { displayName: name });

      const user = auth.currentUser;
      console.log(user);

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
          } else {
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
      const result = await getRedirectResult(auth);
      const { user } = result;
      const repo = new MyUserDatabase();
      repo.setNewUser(user);

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
        credential: GoogleAuthProvider.credentialFromError(error),
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

// Link Multiple Auth Providers to an Account

export const linkMultipleAuth = createAsyncThunk(
  'auth/linkMultipleAuth',
  async (newCredential, thunkAPI) => {
    try {
      // The implementation of how you store your user data depends on your application
      const repo = new MyUserDatabase();

      // Get reference to the currently signed-in user
      const prevUser = auth.currentUser;
      console.log(prevUser);

      // Get the data which you will want to merge. This should be done now
      // while the app is still signed in as this user.
      const prevUserData = repo.get(prevUser);

      // Delete the user's data now, we will restore it if the merge fails
      repo.delete(prevUser);

      // Sign in user with the account you want to link to
      signInWithCredential(auth, newCredential)
        .then(result => {
          console.log('Sign In Success', result);
          const currentUser = result.user;
          const currentUserData = repo.get(currentUser);

          // Merge prevUser and currentUser data stored in Firebase.
          // Note: How you handle this is specific to your application
          const mergedData = repo.merge(prevUserData, currentUserData);

          const credential = OAuthProvider.credentialFromResult(result);
          return linkWithCredential(prevUser, credential)
            .then(linkResult => {
              // Sign in with the newly linked credential
              const linkCredential =
                OAuthProvider.credentialFromResult(linkResult);
              return signInWithCredential(auth, linkCredential);
            })
            .then(signInResult => {
              // Save the merged data to the new user
              repo.set(signInResult.user, mergedData);
            });
        })
        .catch(error => {
          // If there are errors we want to undo the data merge/deletion
          console.log('Sign In Error', error);
          repo.set(prevUser, prevUserData);
        });
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

// import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

// const auth = getAuth();
// sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export const writeUserData = itemData => {
  console.log('start');
  // const itemData = {
  //   id: '3',
  //   username: 'Oki',
  //   email: 'oki@gmail.com',
  // };
  set(ref(db, 'items/' + itemData.id), itemData)
    .then(() => {
      console.log('Data written successfully.');
    })
    .catch(error => {
      console.error('Error writing data:', error);
    });
};

// export const writeUserData = () => {
//   console.log('start');
//   const itemData = {
//     id: '3',
//     username: 'Oki',
//     email: 'oki@gmail.com',
//   };
//   set(ref(db, 'items/' + itemData.id), itemData)
//     .then(() => {
//       console.log('Data written successfully.');
//     })
//     .catch(error => {
//       console.error('Error writing data:', error);
//     });
// };
