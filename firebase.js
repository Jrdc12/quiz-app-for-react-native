// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5aV_AKTbhLZVQ5a0bfPy9Ue1SjNDir78",
  authDomain: "quizapp-21287.firebaseapp.com",
  projectId: "quizapp-21287",
  storageBucket: "quizapp-21287.appspot.com",
  messagingSenderId: "176595163238",
  appId: "1:176595163238:web:b592255bbc2e52538b35a7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };