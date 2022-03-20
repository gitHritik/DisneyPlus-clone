import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_0JnPoTFkwrxi_75BNwqhEAFRZEjTOtQ",
  authDomain: "disneyplus-clone-177e9.firebaseapp.com",
  projectId: "disneyplus-clone-177e9",
  storageBucket: "disneyplus-clone-177e9.appspot.com",
  messagingSenderId: "351000834706",
  appId: "1:351000834706:web:fe9542d864cabf48286c4b",
  measurementId: "G-ML90K6P3W3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const strorage = firebase.storage();

export { auth, provider, strorage };
export default db;
