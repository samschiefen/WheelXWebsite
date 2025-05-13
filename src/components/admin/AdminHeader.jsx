import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../styles/stylesheet.css';

export default function Header() {
  const navigate = useNavigate();

  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const mockLogoUrl = "/WheelXWebsite/images/logo_placeholder.png"; // Placeholder logo image URL
    setLogoUrl(mockLogoUrl);
  }, []);

  return (
    <header className="header" id="HeaderSection">
      <div className="header-img">
      <img
          src={logoUrl}
          alt="Logo"
          width="60"
          height="60"
          className="logoImage"
          onClick={() => navigate("/adminDashboard")}
          style={{ cursor: "pointer" }}
        />
      </div>
      
      <div id="regHeader" className="adminHeaderButtons headers logoImage">
        <button className="pageButton button" onClick={() => navigate("/adminDashboard")}>
          Dashboard
        </button>
      </div>

      <div id="adminDropdown" className="dropdown-container">
        <img src="/WheelXWebsite/images/profile.jpg" alt="Dropdown" width="40px" height="40px" className="dropdown" />
        <div className="dropdown-content">
          <Link to="/adminProfile" id="adminProfileButton" className="pageButton dropdown-item">Profile</Link>
          <Link to="/adminSettings" id="adminSettingsButton" className="pageButton dropdown-item">Admin Settings</Link>
          <Link to='/' id="adminLogout" className="dropdown-item">Sign Out</Link>
        </div>
      </div>
    </header>
  );
}
