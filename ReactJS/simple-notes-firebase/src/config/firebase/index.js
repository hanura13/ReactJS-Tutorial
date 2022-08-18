import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/compat/firestore'
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyCK5wTfWuuTC_b1d9IecYcfziCUtVAt2TY",
    authDomain: "simple-note-firebase-c9c06.firebaseapp.com",
    projectId: "simple-note-firebase-c9c06",
    storageBucket: "simple-note-firebase-c9c06.appspot.com",
    messagingSenderId: "188257954289",
    appId: "1:188257954289:web:32a094806490149faabc50",
    measurementId: "G-8DSD4NP4H2"
  };

  // Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const database = getDatabase();

export default firebase;