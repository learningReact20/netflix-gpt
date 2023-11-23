// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm9BD4xb0zseONpA3D0B2SqnNxKcdwL80",
  authDomain: "netflixgpt-c7585.firebaseapp.com",
  projectId: "netflixgpt-c7585",
  storageBucket: "netflixgpt-c7585.appspot.com",
  messagingSenderId: "268309290387",
  appId: "1:268309290387:web:aee87a84e00d0348f79c66",
  measurementId: "G-P7MBYH4Z7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
