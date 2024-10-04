import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clientId = "672690374803-2cfaejd10p0uk8flvflls9jmm4ugl586.apps.googleusercontent.com";

  const onLoginSuccess = (response) => {
    console.log("Login successful!", response);
    setIsLoggedIn(true);
  };

  const onLoginFailure = (response) => {
    console.log("Login failed", response);
  };

  return (
    <div className='wrapper'>
      {!isLoggedIn ? (
        <form action=''>
          <h1>Login</h1>

          <div className="input-box">
            <input type='text' placeholder='Username' required />
            <FaUser className='icon' />
          </div>

          <div className="input-box">
            <input type='password' placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <hr style={{ margin: '20px 0', border: '0.5px solid lightgray' }} />
            <p>Don't have an account?</p>
          </div>
          <div className='google-login-button'>

            {/* Google Login Button */}
            <div id="signInButton">
              <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}

              />
            </div>
          </div>
        </form>
      ) : null} {/* This will render nothing when the user is logged in */}
    </div>
  );
};

export default LoginForm;
