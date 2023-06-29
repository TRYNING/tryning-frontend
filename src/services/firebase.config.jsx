// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvBlB0MkVO7un4HyPsR_Cn8XQSeplAj7g",
  authDomain: "proyecto-entrenamiento-610ea.firebaseapp.com",
  projectId: "proyecto-entrenamiento-610ea",
  storageBucket: "proyecto-entrenamiento-610ea.appspot.com",
  messagingSenderId: "76766667645",
  appId: "1:76766667645:web:db608a0ddcbed533826214",
  measurementId: "G-TL4Y4DKW38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
