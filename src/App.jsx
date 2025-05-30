import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
      // Filler data for app name and logo (instead of fetching from backend)
      const mockAppName = 'WheelXInc';
  
      setAppName(mockAppName); 
      document.title = mockAppName;
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
