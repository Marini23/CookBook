// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHiINcdWh8Ltp-_FJVOnbg2M0EOxsyHzo',
  authDomain: 'cookbook-1d9f3.firebaseapp.com',
  projectId: 'cookbook-1d9f3',
  storageBucket: 'cookbook-1d9f3.appspot.com',
  messagingSenderId: '776747179345',
  appId: '1:776747179345:web:a802091962b024c8180770',
  measurementId: 'G-FX7JWMZVEJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const db = getDatabase(app);
