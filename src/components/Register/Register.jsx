import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const auth = getAuth();

  // const [formData, setFormData] = useState({});
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value; // Updated to "email" for better clarity
    const password = event.target.password.value;
    const accepted = e.target.terms.checked;
    // setFormData({ email, password }); // Use better naming for form data
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditions!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        setSuccess("user create successful");
      })
      .catch((error) => {
        console.error("error", error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                   type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <span
                  className=""
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div>
                {registerError && (
                  <p className="text-red-600 p-5">{registerError}</p>
                )}
              </div>
              <div>
                {success && <p className="text-green-600 p-5">{success}</p>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
