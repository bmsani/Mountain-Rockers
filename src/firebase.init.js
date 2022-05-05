// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjqAhp1XwxbfYFJBItNpICHM2B_JnZWwY",
  authDomain: "mountain-rockers.firebaseapp.com",
  projectId: "mountain-rockers",
  storageBucket: "mountain-rockers.appspot.com",
  messagingSenderId: "486811871619",
  appId: "1:486811871619:web:ba78b206857d164602aeb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;