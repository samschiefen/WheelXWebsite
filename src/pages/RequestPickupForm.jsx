import React from 'react';
import Header from '../components/user/UserHeader';
import '../styles/stylesheet.css';

export default function RequestPickup() {
  return (
    <>
      <Header />
      <section id="requestPickup" className="group page">
        <div className="group_header">
          <h1>Request Pickup</h1>
        </div>
        <form id="requestPickupForm" action="" method="post">
          <label htmlFor="pickupAddressInput">Pickup Address:</label>
          <input type="text" id="pickupAddressInput" name="pickupAddressInput" required />

          <label htmlFor="wasteTypeSelect">Waste Type:</label>
          <select id="wasteTypeSelect" name="wasteTypeSelect" required>
            <option value="none">Select Waste Type</option>
          </select>

          <label htmlFor="pickupQuantity">Quantity:</label>
          <input type="number" id="pickupQuantity" name="pickupQuantity" min="0" required />

          <label htmlFor="wasteSize">Volume:</label>
          <select id="wasteSize" name="wasteSize" required>
            <option value="none">Select Waste Size</option>
          </select>
        
          <label htmlFor="weightUnit">Weight (optional):</label>
          <select id="weightUnit" name="wasteUnit">
            <option value="none">Select Waste Unit</option>
          </select>
          <input type="number" id="weight" name="weight" min="0" />

          <button type="submit">Submit Request</button>
        </form>
        <div id="error-message" style={{display: "none", color: "red"}}>Please select a value for all selects</div>
      </section>
    </>
  );
}