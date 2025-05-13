import React from 'react';
import { useState } from 'react';
import Header from '../components/user/UserHeader';
import '../styles/stylesheet.css';

export default function UserProfile() {
  const [user, setUser] = useState({
    username: 'James Smith',
    profileImage: '/WheelXWebsite/images/profile.jpg',
    gender: 'Male',
    email: 'jamessmith@gmail.com',
    phone: '306-933-6764',
    address: '201 21st Street East, S7K 0B8, Saskatoon, SK, Canada',
    verified: true,
    totalMoney: 1000
  });

  // Example: Load from API or global state later
  // useEffect(() => {
  //   fetch('/api/user-profile')
  //     .then(res => res.json())
  //     .then(data => setUser(data));
  // }, []);

  return (
    <>
      <Header />
      <section id="profile" className="page">
        <div className="container">
          <img id="userProfileIcon" src={user.profileImage} alt="Profile" width="240" height="240" />
          <h1 id="username">{user.username}</h1>

          <div className="profile-info">
            <label htmlFor="gender">Gender:</label>
            <p id="gender">{user.gender}</p>
          </div>

          <div className="profile-info">
            <label htmlFor="email">Email:</label>
            <p id="email">{user.email}</p>
          </div>

          <div className="profile-info">
            <label htmlFor="phone">Phone number:</label>
            <p id="phone">{user.phone}</p>
          </div>

          <div className="profile-info">
            <label htmlFor="address">Address:</label>
            <p id="address">{user.address}</p>
          </div>

          <div className="profile-info">
            <label htmlFor="verification">Residential Verification:</label>
            <p id="verification">{user.verified ? 'True' : 'False'}</p>
          </div>

          <div className="profile-info">
            <label htmlFor="total-money">Total Money:</label>
            <p id="total-money">${user.totalMoney}</p>
          </div>
        </div>
      </section>
    </>
  );
}