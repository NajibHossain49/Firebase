/* eslint-disable react/prop-types */
import { createContext } from "react";

// Create Authentication Context
export const AuthContext = createContext(null);

const Context = ({children}) => {
  const authInfo = {
    name: "Najib",
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
};

export default Context;
