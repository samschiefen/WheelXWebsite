import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from '../components/user/UserHeader';
import '../styles/stylesheet.css';

export default function UserDashboard() {
  const location = useLocation();
  const [faqs, setFaqs] = useState([]);
  const [expandedFaqs, setExpandedFaqs] = useState({});

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Fetch FAQs on component mount
  useEffect(() => {
    // Filler FAQs
    const mockFaqs = [
      {
       question: "How do I schedule a pickup?",
        answer: "You can schedule a pickup through our app or website by entering your address and preferred time.",
      },
      {
        question: "What materials do you accept?",
        answer: "We accept plastics, aluminum cans, glass bottles, and cardboard.",
      },
      {
        question: "Is there a cost for pickup?",
        answer: "Pickup is free in most service areas. Check your zip code to confirm.",
      },
    ];
    setFaqs(mockFaqs);
  }, []);
  
  // Toggle the visibility of the answer
  const handleToggleAnswer = (index) => {
    setExpandedFaqs((prevExpandedFaqs) => ({
      ...prevExpandedFaqs,
      [index]: !prevExpandedFaqs[index],
    }));
  };

  return (
    <>
      <Header />
      <section id="dashboard" className="page">
        <div className="homepageSection" id="overview">
          <h1 id="mainHeading"><span>Recycle</span> and get <span>rewarded</span></h1>
          <p>Our company is dedicated to increasing recycling and promoting a positive environmental impact.</p>
          <p>With our deposit-reward system, individuals and organizations can return different types of recyclable materals and get compensated for their returns.</p>
          <h2>Fast, Organized, and Easy to use.</h2>
          <img src="/WheelXWebsite/images/garbage_truck.jpg" alt="Recycling truck" id="dashboardImg" />
        </div>
        <div className="homepageSection" id="getEstimate">
          <h1>Get an Estimate</h1>
          <p>Just enter your pickup address below! </p>
          <form id="pickupEstimateForm">
            <input type="text" id="pickupAddress" name="pickupAddress" placeholder="Pickup Address" required /><br />
        
            <button id="estimateButton" type="submit">Get Estimate</button>
          </form>
        </div>
        <div className="homepageSection" id="FAQ">
          <h2>Frequently Asked Questions</h2>
          <p>Have Questions?</p>
          <dl>
            {faqs.map((faq, index) => (
              <div key={index}>
                <dt className='FAQTerm' onClick={() => handleToggleAnswer(index)} 
                  style={{ cursor: "pointer" }}>
                  <span>{faq.question}</span>
                  <span className='sign'>
                    {expandedFaqs[index] ? "\u2212" : "\u002B"}
                  </span>
                </dt>
                {expandedFaqs[index] && <dd className='answer'>{faq.answer}</dd>}
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}