import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='cont'>
      <div className='loginpage'>
      <div className='text-signup'>
      <h1>Signin to your</h1>
      <h1>PopX account</h1>
      <p>Lorem ipsum dolor sit amet,</p>
      <p>consectetur adipiscing elit.</p>
      </div>
      <form className='login'>
        <div className="loginsignup-fields">
          <div className='input-container'>
            <label for='email'>Email Address</label>
            <input
              type="email"
              id="email"
              placeholder='Enter email address'
            />
          </div>
          <div className='input-container'>
          <label for ='password'>Password</label>
            <input
              type="password"
              name="password"
              placeholder='Enter password'
            />
          </div>
        </div>
        <button type="submit" className="sub" onClick={() => navigate('/profile')}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
