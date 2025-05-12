import React from 'react';
import { useState } from 'react';
import Header from '../components/admin/AdminHeader';
import '../styles/stylesheet.css';

export default function AdminProfile() {
  const [admin, setAdmin] = useState({
    username: 'Admin',
    email: 'admin@gmail.com',
    phone: '306-933-6764',
    address: '201 21st Street East, S7K 0B8, Saskatoon, SK, Canada',
    profileImage: '/images/profile.jpg'
  });
  return (
    <>
      <Header />
      <section id="adminProfile" className="page">
        <div className="container">
          <img
            id="adminProfileIcon"
            src={admin.profileImage}
            alt="Profile"
            width="240"
            height="240"
          />
          <h1 id="adminUsername">{admin.username}</h1>
          <div className="profile-info">
            <label htmlFor="email">Email:</label>
            <p id="email">{admin.email}</p>
          </div>
          <div className="profile-info">
            <label htmlFor="phone">Phone number:</label>
            <p id="phone">{admin.phone}</p>
          </div>
          <div className="profile-info">
            <label htmlFor="address">Address:</label>
            <p id="address">{admin.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}