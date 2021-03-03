import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyDdzKsxO8lZbjqUIa4U-yStKY320GMVtEs",
  authDomain: "lolfans.firebaseapp.com",
  projectId: "lolfans",
  storageBucket: "lolfans.appspot.com",
  messagingSenderId: "1090967930001",
  appId: "1:1090967930001:web:fec790e6f27eaebf22eb30",
  measurementId: "G-4Y8S5Y72PY",
};
export default firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export const storage = firebase.storage();
