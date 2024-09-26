import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";

const Login2 = () => {
  const auth = getAuth();

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error and success
    setRegisterError('');
    setSuccess('');


    // add validation 
    signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            if(result.user.emailVerified){
                setSuccess('User Logged in Successfully.')
            }
            else{
                alert('Please verify your email address.')
            }
        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message);
        })
}


  return (
    <div>
      <form onSubmit={handleLogin} className="hero bg-base-200 min-h-screen">
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
    </div>
  );
};

export default Login2;
