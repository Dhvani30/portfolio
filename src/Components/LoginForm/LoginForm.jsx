import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
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

        <div className="remember-forgot">
          <div className="remember-me">
            <label>
              <input type='checkbox' /> Remember me?
            </label>
          </div>
          <div className="forgot-password">
            <a href='#'>Forgot Password?</a>
          </div>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
          <p>Don't have an account?</p>
        </div>
      </form>
    </div>
  );
};
