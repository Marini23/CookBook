import { sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { child, get, ref, set, update } from 'firebase/database';
import toast from 'react-hot-toast';

export const writeUserData = user => {
  console.log(user);
  const userId = user.uid;
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

export const forgotPassword = email => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success('Password reset email sent!');
    })
    .catch(error => {
      const errorMessage = error.message;
      toast.error(errorMessage);
    });
};
