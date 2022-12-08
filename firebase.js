// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhwkUOXlLkVrJkr4XmWyOkvBo-wsP7Ick",
  authDomain: "quizapp-e19d3.firebaseapp.com",
  projectId: "quizapp-e19d3",
  storageBucket: "quizapp-e19d3.appspot.com",
  messagingSenderId: "31983519896",
  appId: "1:31983519896:web:89680bfe3c0abd8802a8ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}