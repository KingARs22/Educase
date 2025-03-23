import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='cont'>
     <div className="card">
      <div className='account'>
      <h2>Account Settings</h2>
      </div>
      <div className="profile">
        <img src="/Ellipse 114.png" alt="Profile" />
        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
    </div>
  );
};

export default Profile;
