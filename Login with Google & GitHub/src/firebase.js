import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup , GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHAWDw0q7UlDYMWJE86cPNmYIrTkiF2gM",
  authDomain: "new-firebase-project-21145.firebaseapp.com",
  projectId: "new-firebase-project-21145",
  storageBucket: "new-firebase-project-21145.firebasestorage.app",
  messagingSenderId: "410823609095",
  appId: "1:410823609095:web:ed0f4386427e1dd1f853a2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

