import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { useState } from "react";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app); // Authentication instance

  const googleProvider = new GoogleAuthProvider();

  const [formData, setFormData] = useState({}); // Updated state name
  // console.log(formData);

  const [users, setUsers] = useState(null);

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
        setUsers(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleSignOut = () => {
    signOut(auth)
        .then(result => {
            console.log(result);
            setUsers(null);
        })
        .catch(error => {
            console.log(error)
        })
}

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
      {
                users ?
                    <button className="btn btn-ghost" onClick={handleSignOut}>Sign out</button> :
                    <>
                        <button className="btn btn-ghost" onClick={handleGoogleSignIn}>Google login</button>
                        {/* <button onClick={handleGithubSignIn}>Github Login</button> */}
                    </>
            }
        
      </div>

      <div className="p-15 m-15 text-5xl">
        {
          users && <div>
            
            {users.displayName} 
            
            <h1>{users.email}</h1></div>
        }
      </div>
    </div>
  );
};

export default Login;
