import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MainDashboard from './pages/MainDashboard';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';
import UserSettings from './pages/UserSettings';
import AdminProfile from './pages/AdminProfile';
import AdminSettings from './pages/AdminSettings';
import SignIn from './pages/SignInPage';
import CreateAccount from './pages/CreateAccountPage';
import RequestPickup from './pages/RequestPickupForm';
import RequestPurchase from './pages/RequestPurchaseForm';

function App() {
  const [appName, setAppName] = useState('My App');

  useEffect(() => {
    fetch('http://localhost:5000/getLogoName')
      .then(res => res.json())
      .then(data => {
        if (data.appName) {
          setAppName(data.appName);
          document.title = data.appName;
        }
      })
      .catch(err => {
        console.error('Failed to fetch app name:', err);
        document.title = 'My App';
      });
  }, []);
  
  return (
    <Router>
      <main>
        <Routes>
          <Route path ="/" element={<MainDashboard />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path ="/userDashboard" element={<UserDashboard />} />
          <Route path ="/userProfile" element={<UserProfile />} />
          <Route path ="/userSettings" element={<UserSettings />} />
          <Route path ="/requestPickup" element={<RequestPickup />} />
          <Route path ="/requestPurchase" element={<RequestPurchase />} />
          <Route path ="/adminDashboard" element={<AdminDashboard />} />
          <Route path ="/adminProfile" element={<AdminProfile />} />
          <Route path ="/adminSettings" element={<AdminSettings />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
