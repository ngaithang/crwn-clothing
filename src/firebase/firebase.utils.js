import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCguCzlgCDL0AhqwYm_mjow36CFocWHd3M",
  authDomain: "crwn-db-11c75.firebaseapp.com",
  databaseURL: "https://crwn-db-11c75.firebaseio.com",
  projectId: "crwn-db-11c75",
  storageBucket: "crwn-db-11c75.appspot.com",
  messagingSenderId: "352377119228",
  appId: "1:352377119228:web:826d3415183abf5bd25279",
  measurementId: "G-M6W1GGJYDH",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if not login, exit
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user, error.message");
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
