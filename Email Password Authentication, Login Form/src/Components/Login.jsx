import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  // __________________________________
  const handelFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    // \end{code}

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setErrorMessage("");
      })
      .catch((error) => {
        // Handle error based on the error code
        let customMessage = "";
        switch (error.code) {
          case "auth/email-already-in-use":
            customMessage = "The email address is already in use.";
            break;
          case "auth/invalid-email":
            customMessage = "The email address is not valid.";
            break;
          case "auth/operation-not-allowed":
            customMessage = "Email/password accounts are not enabled.";
            break;
          case "auth/weak-password":
            customMessage =
              "The password is too weak. Please choose a stronger password.";
            break;
          default:
            customMessage = "An unknown error occurred. Please try again.";
        }
        setErrorMessage(customMessage);
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-24">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelFormSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {/* \begin{pre} */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
