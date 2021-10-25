import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZBPxuXtJ78IwR9a9ce8ML9Up1R4s1S-E",
  authDomain: "instagram-clone-react-c517e.firebaseapp.com",
  projectId: "instagram-clone-react-c517e",
  storageBucket: "instagram-clone-react-c517e.appspot.com",
  messagingSenderId: "897028914214",
  appId: "1:897028914214:web:8d71581704c060ea34bae7",
  measurementId: "G-4D8R5R0090",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
