// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-TtvXkIn68AodhnRwkKvxbVBaqrPL9aA",
    authDomain: "final-project-152235865100552.firebaseapp.com",
    projectId: "final-project-152235865100552",
    storageBucket: "final-project-152235865100552.appspot.com",
    messagingSenderId: "953289682887",
    appId: "1:953289682887:web:e3a5f6d36590c149a133e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
