import React from 'react';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../styles/stylesheet.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [logoUrl, setLogoUrl] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (location.pathname === "/") {
      // Already on MainDashboard — just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage, then scroll after mount
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

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
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      
      <div id="regHeader" className="headerButtons headers logoImage">
        <button className="pageButton button" onClick={() => handleScrollOrNavigate("getEstimate")}>
          Get Estimate
        </button>
        <button className="pageButton button" onClick={() => handleScrollOrNavigate("FAQ")}>
          FAQ
        </button>
      </div>

      <div id="regDropdown" className="dropdown-container">
        <Link to='/signIn' className="dropdown pageButton">Sign in</Link>
        <div className="dropdown-content">
          <Link to='/userDashboard' className="dropdown-item">Sign in as User</Link>
          <Link to='/adminDashboard' className="dropdown-item">Sign in as Admin</Link>
        </div>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {['Get Estimate', 'FAQ'].map((label) => (
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
            }}>
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
