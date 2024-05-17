import { auth, facebookProvider, googleProvider } from '../../firebase';
import { db } from '../../firebase';
import { EmailAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import {
  GoogleAuthProvider,
  linkWithCredential,
  FacebookAuthProvider,
  signInWithPopup,
  linkWithPopup,
} from 'firebase/auth';
import { child, get, ref, set, update } from 'firebase/database';

export const writeUserData = user => {
  const userId = user.uid;
  console.log(user.providerData);
  set(ref(db, 'users/' + userId), {
    username: user.displayName,
    email: user.email,
    providerData: user.providerData,
  })
    .then(() => {
      console.log('Data written successfully.');
    })
    .catch(error => {
      console.error('Error writing data:', error);
    });
};

export const getUserData = user => {
  const userId = user.uid;
  const dbRef = ref(db);
  get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export const updateUser = user => {
  console.log(user);
  const userId = user.uid;
  const updates = {};

  // Create the update data for the user
  const userData = {
    username: user.displayName,
    providerData: user.providerData,
  };

  // Set the path and data to be updated
  updates['users/' + userId] = userData;

  console.log(updates);

  // Perform the update
  return update(ref(db), updates);
};

export const linkWithGoogleA = () => {
  linkWithPopup(auth.currentUser, googleProvider)
    .then(result => {
      // Accounts successfully linked.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      // Handle Errors here.
      // ...
    });
};

export const signInWithGoogleA = () => {
  signInWithPopup(auth, googleProvider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      writeUserData(user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const linkWithFacebook = () => {
  linkWithPopup(auth.currentUser, facebookProvider)
    .then(result => {
      // Accounts successfully linked.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      // Handle Errors here.
      // ...
    });
};

export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      writeUserData(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const linkWithEmailPassword = values => {
  console.log(values);
  const { email, password } = values;
  const credential = EmailAuthProvider.credential(email, password);
  linkWithCredential(auth.currentUser, credential)
    .then(usercred => {
      const user = usercred.user;
      console.log('Account linking success', user);
    })
    .catch(error => {
      console.log('Account linking error', error);
    });
};

export const loginWithEmailPassword = values => {
  console.log(values);
  const { email, password } = values;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const checkIfLinked = (user, providerId) => {
  const providerIndex = user.providerData.findIndex(
    provider => provider.providerId === providerId
  );
  // -1 if the provider doesn't exist
  return providerIndex;
};

// export const cred = () => {
//   const cred = firebase.auth.EmailAuthProvider.credential(email, password);
// };

// const merge = (previousUser, provider) => {
//   // provider can be "google.com" or "twitter.com" etc..
//   // We're basically signing in the user a second time with the social media account
//   // that they want it to be merged with the current one.
//   auth.signInWithPopup(provider).then(user => {
//     const secondAccountCred = user.credential;
//     // Then we're deleting the current social media provider to prevent any conflicts in case it's used to connect to another account on your app.
//     // The current user here means the one he just signed in with clicking on the merge button.
//     auth.currentUser
//       .delete()
//       .then(() => {
//         // Now we're connecting the previousUser which represents the provider account that the user used to
//         // sign in to the app at the very beginning.
//         return previousUser.linkWithCredential(secondAccountCred);
//       })
//       .then(() => {
//         // Reconnecting to the app.
//         auth.signInWithCredential(secondAccountCred);
//         console.log('Accounts linked successfully!');
//       });
//   });
// };

// const unmerge = (user, providerIndex) => {
//   user
//     .unlink(user.providerData[providerIndex].providerId)
//     .then(() => {
//       console.log('Unlinked successfully!');
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };

// export const mergeAndUnmergeWithGoogle = () => {
//   console.log(`1`);
//   const user = auth.currentUser;
//   console.log(`2`);
//   console.log(user);
//   if (user) {
//     const providerIndex = checkIfLinked(user, 'google.com');
//     if (providerIndex !== -1) unmerge(user, providerIndex);
//     else merge(user, googleProvider);
//   }
// };

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
