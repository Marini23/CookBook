import { auth, facebookProvider, googleProvider } from '../../firebase';
import { db } from '../../firebase';
import { EmailAuthProvider } from 'firebase/auth';
import {
  GoogleAuthProvider,
  signInWithCredential,
  OAuthProvider,
  linkWithCredential,
  FacebookAuthProvider,
  getRedirectResult,
  linkWithRedirect,
  signInWithRedirect,
  signInWithPopup,
  linkWithPopup,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MyUserDatabase from './MyUserDataBase';
import { ref, set } from 'firebase/database';

export const writeUserData = ({ user, password }) => {
  console.log('start');
  set(ref(db, 'users/' + user.uid), {
    name: user.displayName,
    email: user.email,
    password: user.password,
  })
    .then(() => {
      console.log('Data written successfully.');
    })
    .catch(error => {
      console.error('Error writing data:', error);
    });
};

const checkIfLinked = (user, providerId) => {
  //provider Data is an array that contains the providers linked to their account
  // "google.com", "twitter.com", etc..
  const userProviders = user.providerData;
  let providerIndex = -1;
  for (let i = 0; i < userProviders.length; i++) {
    if (userProviders[i].providerId === providerId) providerIndex = i;
  }
  //-1 if the provider doesn't exist
  return providerIndex;
};

const merge = (previousUser, provider) => {
  // provider can be "google.com" or "twitter.com" etc..
  // We're basically signing in the user a second time with the social media account
  // that they want it to be merged with the current one.
  auth.signInWithPopup(provider).then(user => {
    const secondAccountCred = user.credential;
    // Then we're deleting the current social media provider to prevent any conflicts in case it's used to connect to another account on your app.
    // The current user here means the one he just signed in with clicking on the merge button.
    auth.currentUser
      .delete()
      .then(() => {
        // Now we're connecting the previousUser which represents the provider account that the user used to
        // sign in to the app at the very beginning.
        return previousUser.linkWithCredential(secondAccountCred);
      })
      .then(() => {
        // Reconnecting to the app.
        auth.signInWithCredential(secondAccountCred);
        console.log('Accounts linked successfully!');
      });
  });
};

const unmerge = (user, providerIndex) => {
  user
    .unlink(user.providerData[providerIndex].providerId)
    .then(() => {
      console.log('Unlinked successfully!');
    })
    .catch(error => {
      console.error(error);
    });
};

export const mergeAndUnmergeWithGoogle = () => {
  console.log(`1`);
  const user = auth.currentUser;
  console.log(`2`);
  console.log(user);
  if (user) {
    const providerIndex = checkIfLinked(user, 'google.com');
    if (providerIndex !== -1) unmerge(user, providerIndex);
    else merge(user, googleProvider);
  }
};

// not use
export const signInWithGoogleTest = () => {
  // signInWithPopup(auth, googleProvider)
  //   .then(result => {
  //     console.log('test1');
  //     // This gives you a Google Access Token. You can use it to access Google APIs.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     console.log(credential);
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //     console.log(user);
  //   })
  //   .catch(error => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
  linkWithPopup(auth.currentUser, googleProvider)
    .then(result => {
      // Accounts successfully linked.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      // ...
    });
};

linkWithRedirect(auth.currentUser, googleProvider)
  .then(result => {
    // Accounts successfully linked.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    // ...
  })
  .catch(error => {
    // Handle Errors here.
    // ...
  });

export const res = getRedirectResult(auth)
  .then(result => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    return user;
  })
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

// Link Multiple Auth Providers to an Account

export const linkMultipleAuth = createAsyncThunk(
  'auth/linkMultipleAuth',
  async ({ newCredential }, thunkAPI) => {
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

// // import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

// // const auth = getAuth();
// // sendPasswordResetEmail(auth, email)
// //   .then(() => {
// //     // Password reset email sent!
// //     // ..
// //   })
// //   .catch(error => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });

// export const writeUserData = itemData => {
//   console.log('start');
//   // const itemData = {
//   //   id: '3',
//   //   username: 'Oki',
//   //   email: 'oki@gmail.com',
//   // };
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

// Аутентификация Firebase использует концепцию предпочтительного провайдера, что означает, что она распознает, когда определенный адрес электронной почты входит в систему у определенного провайдера. Наиболее распространенный пример этого — вход в Google с адресом @gmail.com или в Microsoft с адресом @outlook.com или @hotmail.com. Даже если такой адрес электронной почты ранее использовался у другого провайдера, считается, что предпочитаемый провайдер лучше знает учетную запись, и поэтому ранее существовавшая учетная запись перезаписывается.

// Если вместо этого вы хотите иметь возможность входить в систему как с помощью электронной почты + пароля, так и с помощью предпочитаемого поставщика услуг, вам следует связать учетные записи. Чтобы связать учетные записи, вы сначала проверяете, существует ли существующий поставщик для адреса электронной почты, который пользователь ввел, вызвав fetchSignInMethodsForEmail. Если вы получите какой-либо результат, следуйте инструкциям, чтобы связать поставщиков с одной учетной записью. Если вы не получили результатов, выполните обычный процесс входа в новую учетную запись.

// Well, for my case, I am looking for it to merge accounts.
// So for my following scenario;

// 1- Create user with user1@gmail.com
// 2- Sign out
// 3- Try to login with Facebook (has owner of user1@gmail.com)
// 4- FirebaseUI asks to enter password (since you need to prove you are the owner)
// 5- Firebase merges email + facebook into one account.
// 6- Sign out
// 7- Try to login with Facebook again, it will not ask password again, since you are proven owner.

// import {
//   signInWithPopup,
//   EmailAuthProvider,
//   linkWithCredential,
//   SAMLAuthProvider,
//   signInWithCredential,
// } from 'firebase/auth';
// // Switch to TENANT_ID1
// auth.tenantId = 'TENANT_ID1';

// // Sign-in with popup
// signInWithPopup(auth, provider)
//   .then(userCredential => {
//     // Existing user with e.g. SAML provider.
//     const prevUser = userCredential.user;
//     const emailCredential = EmailAuthProvider.credential(email, password);
//     return linkWithCredential(prevUser, emailCredential)
//       .then(linkResult => {
//         // Sign in with the newly linked credential
//         const linkCredential =
//           SAMLAuthProvider.credentialFromResult(linkResult);
//         return signInWithCredential(auth, linkCredential);
//       })
//       .then(signInResult => {
//         // Handle sign in of merged user
//         // ...
//       });
//   })
//   .catch(error => {
//     // Handle / display error.
//     // ...
//   });

// import {
//   signInWithPopup,
//   fetchSignInMethodsForEmail,
//   linkWithCredential,
// } from 'firebase/auth';
// // Step 1.
// // User tries to sign in to the SAML provider in that tenant.
// auth.tenantId = 'TENANT_ID';
// signInWithPopup(auth, samlProvider).catch(error => {
//   // An error happened.
//   if (error.code === 'auth/account-exists-with-different-credential') {
//     // Step 2.
//     // User's email already exists.
//     // The pending SAML credential.
//     const pendingCred = error.credential;
//     // The credential's tenantId if needed: error.tenantId
//     // The provider account's email address.
//     const email = error.customData.email;
//     // Get sign-in methods for this email.
//     fetchSignInMethodsForEmail(email, auth).then(methods => {
//       // Step 3.
//       // Ask the user to sign in with existing Google account.
//       if (methods[0] == 'google.com') {
//         signInWithPopup(auth, googleProvider).then(result => {
//           // Step 4
//           // Link the SAML AuthCredential to the existing user.
//           linkWithCredential(result.user, pendingCred).then(linkResult => {
//             // SAML account successfully linked to the existing
//             // user.
//             goToApp();
//           });
//         });
//       }
//     });
//   }
// });
