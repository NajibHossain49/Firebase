import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState(false);

  // __________________________________
  const handelFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    // \end{code}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com|icloud\.com)$/i;

    // Example usage
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address 📧");
      return;
    }

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&) 😤"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setErrorMessage("");
        setSuccessMessage(true);
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
        setSuccessMessage(false);
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
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        {SuccessMessage && (
          <p className="text-green-500 text-center">Login Successful</p>
        )}
      </div>
    </div>
  );
};

export default Login;
