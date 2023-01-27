import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJLKvTTmzyHYDT1piTo-dE7Vg1QFbZA_4",
  authDomain: "netflix-clone-7557d.firebaseapp.com",
  projectId: "netflix-clone-7557d",
  storageBucket: "netflix-clone-7557d.appspot.com",
  messagingSenderId: "645282599267",
  appId: "1:645282599267:web:c09a3bda49eea46dbdc356",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
