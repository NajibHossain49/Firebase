/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase"; // Ensure this path is correct
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Create Authentication Context
export const AuthContext = createContext(null);

const Context = ({ children }) => {
  // State Manage User is Logged in or Not
  const [user, setUser] = useState(null);

  // Manage User is Logged in or Not by Observer with useEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Currently Logged User", currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


// Logout user

const logout = () => {
  return signOut(auth)
};



  const authInfo = {
    createUser,
    login,
    user,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
