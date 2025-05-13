import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/user/UserHeader';
import '../styles/stylesheet.css';

export default function UserSettings() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    telephone: '',
    country: '',
    address: '',
    apartment: '',
    city: '',
    zip: ''
  });

  // Simulate fetching data (replace with actual fetch/API call)
  useEffect(() => {
    const fetchedUser = {
      firstName: 'James',
      lastName: 'Smith',
      gender: 'male',
      dob: '1990-05-06',
      email: 'jamessmith@gmail.com',
      telephone: '306-933-6764',
      country: 'Canada',
      address: '201 21st Street East',
      apartment: '',
      city: 'Saskatoon',
      zip: 'S7K 0B8'
    };
    setUserData(fetchedUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Header />
      <section id="profileSettings" className="group page">
        <div className="profile-section user-info">
          <h3>User</h3>
          <form>
            <img id="profile-icon" src="/WheelXWebsite/images/profile.jpg" alt="Profile Icon" width="60" height="60" />
            <button type="button" id="updateProfilePic">Update photo</button>
            <button type="button" id="removeProfilePic">Remove photo</button>
            <br /><br />
            <input 
              type="text" 
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              placeholder="First Name" />
            <input 
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              placeholder="Last Name" />
            <br /><br />

            <span className="gender">Gender:</span><br />
            {['male', 'female', 'other'].map(g => (
              <label key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={userData.gender === g}
                  onChange={handleChange}
                />
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
            <br /><br />

            <label htmlFor="dob">Date of Birth:</label>
            <input 
              type="date" 
              id="dob"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
            />
            <br /><br />
          </form>
          <button id="save-button">Save Changes</button>
        </div>

        <div className="profile-section contact-info">
          <h3>Contact</h3>
          <form>
            <label htmlFor="email">Email:</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <br /><br />
            <label htmlFor="telephone">Telephone Number:</label>
            <input 
              type="tel"
              id="telephone"
              name="telephone"
              value={userData.telephone}
              onChange={handleChange}
            />
            <br /><br />
          </form>
          <button id="save-button">Save Changes</button>
        </div>

        <div className="profile-section adress-info">
          <h3>Address</h3>
          <form>
            <label htmlFor="country">Country</label>
            <select 
              id="country"
              name="country"
              value={userData.country}
              onChange={handleChange}>
              <option value="" disabled>Select Country</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select><br /><br />

            <label htmlFor="address">Address</label>
            <input 
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
            /><br /><br />

            <label htmlFor="apartment">Apartment, suite, etc.</label>
            <input 
              type="text"
              id="apartment"
              name="apartment"
              value={userData.apartment}
              onChange={handleChange}
            /><br /><br />

            <label htmlFor="city">City</label>
            <input 
              type="text"
              id="city"
              name="city"
              value={userData.city}
              onChange={handleChange}
            /><br /><br />

            <label htmlFor="zip">ZIP code</label>
            <input 
              type="text"
              id="zip"
              name="zip"
              value={userData.zip}
              onChange={handleChange}
            /><br /><br />
          </form>
          <button id="save-button">Save Changes</button>
        </div>
      </section>
    </>
  );
}