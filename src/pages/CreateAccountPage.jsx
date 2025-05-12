import React from 'react';
import Header from '../components/Header';
import '../styles/stylesheet.css';

export default function CreateAccount() {
  return (
    <>
      <Header />
      <section id="createAccount" className="page">
        <div>
          <h1>Create an Account</h1>
          <p> Please input the following information to create your Wheel-x account:</p>
          <form id="signUpForm" method="POST">

            <div className="name-group">
              <label htmlFor="first_name">Name:</label>
              <input type="text" id="first_name" placeholder="First Name" />
              <input type="text" id="middle_name" placeholder="Middle" />
              <input type="text" id="last_name" placeholder="Last" />
            </div>

            <div className="form-group">
              <label htmlFor="signUpGender">Gender:</label>
              <select id="signUpGender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="signUpDob">Date of Birth:</label>
              <input type="date" id="signUpDob" required />
            </div>

            <label htmlFor="signUpEmail">Email:</label>
            <input type="email" id="signUpEmail" />

            <label htmlFor="signUpPhone">Phone Number:</label>
            <input type="tel" id="signUpPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

            <label htmlFor="signUpPassword">Create Password:</label>
            <input type="password" id="signUpPassword" minLength="8" required />

            <input type="submit" value="Create Account" />
          </form>
        </div>
      </section>
    </>
  );
}