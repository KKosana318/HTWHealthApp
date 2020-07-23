import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyVC-NphjeSNoREhbNOzwndRPxi4pGACE",
    authDomain: "htw-health.firebaseapp.com",
    databaseURL: "https://htw-health.firebaseio.com",
    projectId: "htw-health",
    storageBucket: "htw-health.appspot.com",
    messagingSenderId: "466183021001",
    appId: "1:466183021001:web:a973d0f1b65fc9b257c818",
    measurementId: "G-HX388CHK5K"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;