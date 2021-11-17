import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVWc2hjRqhYSGNT8ttnD_bhoQrzACDbfk",
  authDomain: "wazup-9a13c.firebaseapp.com",
  databaseURL: "https://wazup-9a13c.firebaseio.com",
  projectId: "wazup-9a13c",
  storageBucket: "wazup-9a13c.appspot.com",
  messagingSenderId: "470191915227",
  appId: "1:470191915227:web:94e6f4743535bf72f20cfe",
  measurementId: "G-Z4WWCEN9JB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
