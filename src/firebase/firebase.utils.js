import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO4Irzn1CHagaCPVDa7J9jHML0eHFEnuY",
    authDomain: "crown-clothing-db-e60a7.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-e60a7.firebaseio.com",
    projectId: "crown-clothing-db-e60a7",
    storageBucket: "crown-clothing-db-e60a7.appspot.com",
    messagingSenderId: "138679669734",
    appId: "1:138679669734:web:b46520055dbceb2cbdbc27",
    measurementId: "G-09F56J65T4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth(); //we export this out anywhere that we need to use anything related to authentication 
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider(); //this gives us access to the GoogleAuthProvider class from the auth library
  provider.setCustomParameters({ prompt: 'select_account' });// this means that we want to always trigger the google pop up when ever we use this google auth
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;