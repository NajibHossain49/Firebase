/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase"; // Ensure this path is correct
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Create Authentication Context
export const AuthContext = createContext(null);

const Context = ({ children }) => {
  // State Manage User is Logged in or Not
  const [user, setUser] = useState(null);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Manage User is Logged in or Not by Observer
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("Currently Logged User", currentUser);
      setUser(currentUser);
    } else {
      console.log("No Currently Logged User");
      setUser(null);
    }
  });

  const authInfo = {
    name: "Najib",
    createUser,
    login,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
