import { signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
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
  const userId = user.uid;
  const updates = {};

  // Create the update data for the user
  const userData = {
    username: user.displayName,
    providerData: user.providerData,
  };

  // Set the path and data to be updated
  updates['users/' + userId] = userData;

  // Perform the update
  return update(ref(db), updates);
};

export const checkIfLinked = (user, providerId) => {
  const providerIndex = user.providerData.findIndex(
    provider => provider.providerId === providerId
  );
  // -1 if the provider doesn't exist
  return providerIndex;
};

export const HandleErrorExistWithDifCred = async error => {
  // Step 2: User's email already exists.
  console.log(error);
  if (error.code === 'auth/account-exists-with-different-credential') {
    // The pending Facebook credential
    console.log('error code');
    let pendingCred = error.credential;
    console.log(pendingCred);

    // Step 3: Save the pending credential in temporary storage
    localStorage.setItem('pendingCredential', JSON.stringify(pendingCred));

    // Step 4: Let the user know that they already have an account
    // but with a different provider, and let them choose another
    // sign-in method.
  }

  // ...

  // try {
  //   // Step 5: Sign the user in using their chosen method.
  //   let result = await signInWithPopup(auth, userSelectedProvider);

  //   // Step 6: Link to the Facebook credential.
  //   // TODO: implement `retrievePendingCred` for your app.
  //   let pendingCred = retrievePendingCred();

  //   if (pendingCred !== null) {
  //     // As you have access to the pending credential, you can directly call the
  //     // link method.
  //     let user = await linkWithCredential(result.user, pendingCred);
  //   }

  //   // Step 7: Continue to app.
  // } catch (error) {
  //   // ...
  // }
};
