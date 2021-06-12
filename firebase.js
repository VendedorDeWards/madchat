import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbvVIK0Qm2hlNtcMHxGFm6xH3UfPKGgmY",
  authDomain: "madchat-c0836.firebaseapp.com",
  projectId: "madchat-c0836",
  storageBucket: "madchat-c0836.appspot.com",
  messagingSenderId: "34029902990",
  appId: "1:34029902990:web:250e67284b7bcb507bfddf",
  measurementId: "G-XGYR9RLS36"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };