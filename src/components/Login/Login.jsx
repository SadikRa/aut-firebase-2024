import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { useState } from "react";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app); // Authentication instance

  const googleProvider = new GoogleAuthProvider();

  const [formData, setFormData] = useState({}); // Updated state name
  // console.log(formData);

  const [user, setUser] = useState([]);

  // console.log(user)
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value; // Updated to "email" for better clarity
    const password = event.target.password.value;
    setFormData({ email, password }); // Use better naming for form data
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="hero bg-base-200 min-h-screen">
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
                  type="password"
                  name="password"
                  placeholder="Enter your password"
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
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="text-center">
        <button className="btn btn-ghost" onClick={handleGoogleSignIn}>
          google
        </button>
      </div>
    </div>
  );
};

export default Login;
