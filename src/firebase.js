import { firebaseConfig } from "./config";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const googleLogin = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log({ token, user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log({ errorCode, errorMessage, email });
    });
};

const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const twitterLogin = () => {
  auth
    .signInWithPopup(twitterProvider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log({ token, user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log({ errorCode, errorMessage, email });
    });
};

export const logout = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Signed out");
    })
    .catch((error) => {
      console.log("Sign out error");
    });
};
