import { auth } from '../../firebase';
import { db } from '../../firebase';
import {
  GoogleAuthProvider,
  signInWithCredential,
  OAuthProvider,
  linkWithCredential,
  FacebookAuthProvider,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MyUserDatabase from './MyUserDataBase';
import { ref, set } from 'firebase/database';

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

export const linkMultipleAuthTest = createAsyncThunk(
  'auth/linkMultipleAuthTest',
  async ({ newCredential, provider }, thunkAPI) => {
    try {
      // The implementation of how you store your user data depends on your application
      const repo = new MyUserDatabase();

      // Get reference to the currently signed-in user
      const prevUser = auth.currentUser;

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

          const credential =
            provider === 'google'
              ? GoogleAuthProvider.credentialFromResult(result)
              : FacebookAuthProvider.credentialFromResult(result);
          return linkWithCredential(prevUser, credential)
            .then(linkResult => {
              // Sign in with the newly linked credential
              const linkCredential =
                provider === 'google'
                  ? GoogleAuthProvider.credentialFromResult(linkResult)
                  : FacebookAuthProvider.credentialFromResult(linkResult);
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
