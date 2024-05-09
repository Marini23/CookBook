import { child, get, ref } from 'firebase/database';
import { db } from '../../firebase';

class MyUserDatabase {
  constructor() {
    // Initialize Firebase or any other database connection here
    this.dbRef = ref(db, 'users/');
  }

  // Get user data from the database
  get(prevUser) {
    get(child(this.dbRef, `users/${prevUser.uid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Delete user data from the database
  delete(prevUser) {
    this.db.ref(`users/${prevUser.uid}`).remove();
  }

  // Merge user data
  merge(prevUserData, currentUserData) {
    const updateUser = { ...prevUserData, ...currentUserData };
    return updateUser;
  }

  // Set user data in the database
  set(user, mergedUserData) {
    this.db.ref(`users/${user.uid}`).set(mergedUserData);
  }

  setNewUser(user) {
    this.db.ref(`users/`).set(user);
  }
}

export default MyUserDatabase;
