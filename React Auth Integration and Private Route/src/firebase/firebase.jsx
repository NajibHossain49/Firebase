// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVuRqewrR3BoUq_i7oaCUaiQv4muP4ZJ4",
  authDomain: "react-auth-private-route-9afa7.firebaseapp.com",
  projectId: "react-auth-private-route-9afa7",
  storageBucket: "react-auth-private-route-9afa7.firebasestorage.app",
  messagingSenderId: "434145788190",
  appId: "1:434145788190:web:7cc1f4ec0a4326c5ff090f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
