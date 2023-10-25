// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7bSHM813vILbRcH88uiUAJyRChooUWw",
  authDomain: "todolist-72a90.firebaseapp.com",
  projectId: "todolist-72a90",
  storageBucket: "todolist-72a90.appspot.com",
  messagingSenderId: "1068057910825",
  appId: "1:1068057910825:web:0cb5b918bed0916d880638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Access Firestore using getFirestore
const firestore = getFirestore(app);

export default firestore;