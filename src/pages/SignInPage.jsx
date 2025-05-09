import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/stylesheet.css';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section id="signIn" className="page">
        <div>
          <h1>User Login</h1>
          <form id="signInForm">
            <input type="email" id="signInEmail" placeholder="Email" />
            <input type="password" id="signInPassword" placeholder="Password" />
            <input type="submit" value="Sign In" />
          </form>
          <button id="createAccountButton" className="pageButton" onClick={() => navigate('/createAccount')}>Create an Account</button>
        </div>
      </section>
    </>
  );
}