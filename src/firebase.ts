// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjaMSMJRU4OBjVZQG-zNQGdIwFOD4VT1w",
  authDomain: "react-store-6daea.firebaseapp.com",
  projectId: "react-store-6daea",
  storageBucket: "react-store-6daea.appspot.com",
  messagingSenderId: "63628335866",
  appId: "1:63628335866:web:b8f6bab2d983eac2070743",
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

