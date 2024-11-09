// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDadv0IRtU4epbSDCSkA8XWEWRoAsUeaw4",
  authDomain: "email-password-auth-e8ab6.firebaseapp.com",
  projectId: "email-password-auth-e8ab6",
  storageBucket: "email-password-auth-e8ab6.firebasestorage.app",
  messagingSenderId: "775605363024",
  appId: "1:775605363024:web:d18d7b977de94b67898c55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
