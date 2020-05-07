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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //the userAuth user doesn't exist on the database yet
    if(!userAuth) return; //if the userAuth object does not exist (no user is signed in) then we just want to return
    // firestore always returns a querry object
    const userRef = firestore.doc(`user/${userAuth.uid}`);//here we are accessing a document in the firestore collection named user
    const snapShot = await userRef.get()//and here were using the id of the document(which is stored in the userRef) to take a snapShot of the data in the document
    // it is await because first we need the userRef to provide us with the id of the document
    if(!snapShot.exists) {
      // the exists property tells us whether there is any data in the document
      const { displayName, email } = userAuth;//this is the properties/data that we want to store
      const createdAt = new Date();//so that we know when we made this new document
      //if the snapshot doesn't exist or there is no data we will create it wuth the try catch block
      try {
        // .set is the create method and we are taking the userRef adding an object to it with the following data
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    
    return userRef; //we need this to populate our state with

    
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth(); //we export this out anywhere that we need to use anything related to authentication 
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider(); //this gives us access to the GoogleAuthProvider class from the auth library
  provider.setCustomParameters({ prompt: 'select_account' });// this means that we want to always trigger the google pop up when ever we use this google auth
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;