import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // __________________________________
  const handelFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log(username, email, password, terms);
    // \end{code}

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com|icloud\.com)$/i;

    if (!terms) {
      setErrorMessage("Please Accept Terms & Conditions 😁");
      return;
    }

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

  // ____________________________________________________________________

  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-24">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelFormSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              name="username"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-3/4 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <FaEyeSlash className="h-4 w-4 text-gray-500" />
              ) : (
                <FaEye className="h-4 w-4 text-gray-500" />
              )}
            </div>
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          {/* \end{code} */}
          <div className="form-control">
            <label className="label justify-start cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-primary"
              />
              <span className="label-text ml-2">Accept Terms & Conditions</span>
            </label>
          </div>
          {/* \end{code} */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {/* \begin{pre} */}
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        {SuccessMessage && (
          <p className="text-green-500 text-center">Registration Successful</p>
        )}

        <Link to="/login">
          <p className="text-blue-700 p-4">Already have an account? Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
