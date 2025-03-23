import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='cont'>
      <div className='homepage'>
      <div className='text-home'>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='buttons'>
      <button className='newaccount' onClick={() => navigate('/signup')}>Create Account</button>
      <button className = 'logins' onClick={() => navigate('/login')}>Already Registered?Login</button>
      </div>
    </div>
    </div>
  )
}

export default Home