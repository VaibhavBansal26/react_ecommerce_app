import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwLE-JJX-IunQhConqE7IgfeC9b926LiU",
    authDomain: "crwn-db-ea2fc.firebaseapp.com",
    databaseURL: "https://crwn-db-ea2fc.firebaseio.com",
    projectId: "crwn-db-ea2fc",
    storageBucket: "crwn-db-ea2fc.appspot.com",
    messagingSenderId: "75058886332",
    appId: "1:75058886332:web:f08acdf9cf0d77391442b9",
    measurementId: "G-BGTEP5X6DN"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log('error creating user',error.message);

      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;