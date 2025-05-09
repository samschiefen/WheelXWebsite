import React from 'react';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../styles/stylesheet.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [logoUrl, setLogoUrl] = useState('');
  
  useEffect(() => {
    fetch("http://localhost:5000/getLogoName")
      .then(res => res.json())
      .then(data => {
        if (data.logo) {
          setLogoUrl(data.logo);
        }
      })
      .catch(err => {
        console.error("Failed to fetch logo:", err);
      });
  }, []);

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname === "/userDashboard") {
      // Already on MainDashboard — just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage, then scroll after mount
      navigate("/userDashboard", { state: { scrollTo: sectionId } });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="header" id="HeaderSection">
      <div className="header-img">
      <img
        src={logoUrl}
        alt="Logo"
        width="60"
        height="60"
        className="logoImage"
        onClick={() => navigate("/userDashboard")}
        style={{ cursor: "pointer" }}
      />
      </div>
      
      <div id="regHeader" className="headerButtons headers logoImage">
        <button className="pageButton button" onClick={() => handleScrollOrNavigate("getEstimate")}>
          Get Estimate
        </button>
        <button className="pageButton button" onClick={() => navigate("/requestPickup") }>
          Request Pickup
        </button>
        <button className="pageButton button" onClick={() => navigate("/requestPurchase")}>
          Request Purchase
        </button>
        <button className="pageButton button" onClick={() => handleScrollOrNavigate("FAQ")}>
          FAQ
        </button>
      </div>

      <div id="userDropdown" className="dropdown-container">
        <img src="/images/profile.jpg" alt="Dropdown" width="40" height="40" className="dropdown" />
        <div className="dropdown-content">
          <Link to='/userProfile' className="pageButton dropdown-item">Profile</Link>
          <Link to='/userSettings' className="pageButton dropdown-item">Settings</Link>
          <Link to='/' className="dropdown-item">Sign Out</Link>
        </div>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {['Get Estimate', 'Request Pickup', 'Request Purchase', 'FAQ'].map((label) => (
          <button 
            className="pageButton button" 
            key={label} 
            onClick={() => {
              setIsMenuOpen(false);
              if (label === 'Get Estimate') {
                handleScrollOrNavigate("getEstimate");
              }
              if (label === 'FAQ') {
                handleScrollOrNavigate("FAQ");
              }
              if (label == 'Request Pickup') {
                navigate("/requestPickup")
              }
              if (label == 'Request Purchase') {
                navigate("/requestPurchase")
              }
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
