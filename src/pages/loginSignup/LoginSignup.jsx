import React, { useState } from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";

function LoginSignup() {
  const [wraper, setWraper] = useState(false);
  const registerFunc = () => {
    setWraper(true);
  };

  const loginFunc = () => {
    setWraper(false);
  };

  return (
    <div className="loginsignup">
      <div className={`wraper ${wraper ? "wraper-new-height" : ""}`}>
        <Link to={"/"}>
          <div className="close-container">X</div>
        </Link>
        <div className="container">
          <div
            className={`input-page ${
              wraper ? "toggle-pages register-page wraper-new-height" : ""
            }`}
          >
            <h1>Login</h1>
            <label htmlFor="email">
              <input type="email" required />
              <span className="material-symbols-outlined"> mail </span>
              <p> Email </p>
            </label>

            <label htmlFor="password">
              <input type="password" required />
              <span className="material-symbols-outlined"> lock </span>
              <p> Password </p>
            </label>
            <div className="forgot-remember">
              <p>
                <input type="checkbox" />
                Remember me
              </p>
              <a href="#">Forgot Password?</a>
            </div>
            <button className="log-reg-btn" type="submit">
              Login
            </button>
            <div className="register-login">
              <p>
                Don't have an account?
                <a className="login-register-toggle" onClick={registerFunc}>
                  Register
                </a>
              </p>
            </div>
          </div>

          <div
            className={`input-page ${
              wraper ? "toggle-pages register-page wraper-new-height" : ""
            }`}
          >
            <h1>Register</h1>
            <label htmlFor="email">
              <input type="text" required />
              <span className="material-symbols-outlined"> person </span>
              <p> Username </p>
            </label>

            <label htmlFor="email">
              <input type="email" required />
              <span className="material-symbols-outlined"> mail </span>
              <p> Email </p>
            </label>

            <label htmlFor="password">
              <input type="password" required />
              <span className="material-symbols-outlined"> lock </span>
              <p> Password </p>
            </label>
            <div className="term-conditions">
              <p>
                <input type="checkbox" />I agree to the
              </p>
              <a href="#">terms & conditions</a>
            </div>
            <button className="log-reg-btn" type="submit">
              Register
            </button>
            <div className="register-login">
              <p>
                Already have an account?
                <a className="login-register-toggle" onClick={loginFunc}>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;

{
  /* <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div> 

      //Styles
      
    
    */
}
