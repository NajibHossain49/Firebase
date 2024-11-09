import React, { useState } from "react";
import { auth, provider, githubProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const LoginButton = () => {
  const [user, setUser] = useState();

  // Login with Google
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

  // Sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        setUser(null); // Set user to null after successful sign out
      })
      .catch((error) => {
        console.log("Error during sign-out:", error);
      });
  };

  // GitHub Sign-In
  const handleGitHub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("GitHub User info:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error during GitHub login:", error);
        setUser(null);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleLogin}>Login with Google</button>
          <button onClick={handleGitHub}>Login with GitHub</button>
        </>
      )}
      {user && (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <p>Email: {user.email}</p>
          <p>
            Photo: <img src={user.photoURL} alt="Profile" />
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
