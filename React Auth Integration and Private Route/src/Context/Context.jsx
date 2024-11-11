/* eslint-disable react/prop-types */
import { createContext } from "react";
import { auth } from '../firebase/firebase'; // Ensure this path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";

// Create Authentication Context
export const AuthContext = createContext(null);

const Context = ({children}) => {

  // Fix typo in the parameter names
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    name: "Najib",
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
