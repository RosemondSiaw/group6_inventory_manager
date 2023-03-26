// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlkZZZ1ImfFSRj8gHnx_qv3KBNNwdFg-8",
  authDomain: "geia-42ab9.firebaseapp.com",
  projectId: "geia-42ab9",
  storageBucket: "geia-42ab9.appspot.com",
  messagingSenderId: "315042673596",
  appId: "1:315042673596:web:becc57a47b598faba0f1b9",
  measurementId: "G-NM9Z18KRYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);