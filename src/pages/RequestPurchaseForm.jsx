import React from 'react';
import Header from '../components/user/UserHeader';
import '../styles/stylesheet.css';

export default function RequestPurchase() {
  return (
    <>
      <Header />
      <section id="requestPurchase" className="group page">
        <div className="group_header">
          <h1>Request Purchase</h1>
        </div>
        <form id="requestPurchaseForm" action="" method="post">
          <label htmlFor="dropAddress">Drop Off Address:</label>
          <input type="text" id="dropAddress" name="dropAddress" required />

          <label htmlFor="Verified">Verified Waste Available:</label>
          <select id="Verified" name="Verified" required>
            <option value="none">Select Waste Type</option>
          </select>

          <label htmlFor="Time">Pickup Time:</label>
          <select id="Time" name="Time" required>
            <option value="none">Select Pickup Time</option>
            <option value="12PM">12 PM</option>
            <option value="2PM">2 PM</option>
            <option value="4PM">4 PM</option>
            <option value="6PM">6 PM</option>
          </select>

          <label htmlFor="purchaseQuantity">Quantity:</label>
          <input type="number" id="purchaseQuantity" name="purchaseQuantity" min="0" max="10" required />

          <label htmlFor="wasteSizeSelect">Volume:</label>
          <select id="wasteSizeSelect" name="wasteSizeSelect" required>
            <option value="none">Select Waste Size</option>
          </select><br />

          <button type="submit">Request Purchase</button>
        </form>
        <div id="error-message2" style={{display: "none", color: "red"}}>Please select a value for all selects</div>
      </section>
    </>
  );
}