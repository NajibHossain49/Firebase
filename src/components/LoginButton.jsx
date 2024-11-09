import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth/web-extension";

const LoginButton = () => {
  const [user, setUser] = useState();

  // _______________________
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // User logged in successfully
        console.log("User info:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setUser(null);
      });
  };

  // _________________________
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error);
      });
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <button onClick={handelSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
      {user && (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <p> Email: {user.email}</p>
          <p>
            Photo : <img src={user.photoURL} alt="Photo" />
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
