import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className='cont-sign'>
      <div className='signup-page'>
        <div className='text'>
        <h1>Create Your</h1>
        <h1>PopX account</h1>
        </div>
        <form className='signup'>
        <div className="loginsignup-fields">
          <div className='input-container'>
            <label for='name'>Full Name<span className="asterisk">*</span></label>
            <input id="name" placeholder='Enter Full Name'/>
          </div>
          <div className='input-container'>
            <label for='Phone number'>Phone Number<span className="asterisk">*</span></label>
            <input id="Phone number" placeholder='Phone Number'/>
          </div>
          <div className='input-container'>
            <label for='email'>Email Address<span className="asterisk">*</span></label>
            <input  type="email" id="email" placeholder='Enter email address'/>
          </div>
          <div className='input-container'>
            <label for='password'>Password<span className="asterisk">*</span></label>
            <input  type="password" id="password" placeholder='Enter Password'/>
          </div>
          <div className='input-container'>
            <label for='company name'>Company Name</label>
            <input id="company name" placeholder='Enter company name'/>
          </div>
          <div className='radio-group'>
          <p>Are you an Agency?<span className="asterisk">*</span></p>
            <label for='yes'>
            <input type='radio' name='que'/>Yes
            </label>
            <label for='no'>         
            <input type='radio' name='que'/>No
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn" onClick={() => navigate('/profile')}>Create Account</button>
        </form>
    </div>
    </div>
  )
}

export default Signup