import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/stylesheet.css';

export default function PriceSettingsForm() {
  const [wasteTypes, setWasteTypes] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    // Replace these with your actual fetch/database calls
    const fetchWasteTypes = async () => {
      // Simulate API call
      const response = await Promise.resolve(['Plastic', 'Glass Bottles', 'Aluminum Cans']);
      setWasteTypes(response);
    };

    const fetchSizes = async () => {
      // Simulate API call
      const response = await Promise.resolve(['Less than 1 Liter', '1 to 2 Liters', 'Greater than 2 Liters']);
      setSizes(response);
    };

    fetchWasteTypes();
    fetchSizes();
  }, []);
  return (
    <form method="POST" action="" id="priceSettingForm" className="settingsPage">
      <div id="priceSetting" className="settingsDiv">
        <h3>Price Settings</h3><br />

        <div id="wasteTypeSettings" className="setting">
          <label htmlFor="wasteType">Waste Type:</label>
          <select id="wasteType" name="wasteType">
            <option value="">Select Waste Type</option>
            {wasteTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>

          <div className="setting">
            <p>Calculate Price By:</p>
            <span>Size x Quantity</span>
          </div>
        </div>

        <div className="setting" id="sizeQuantitySetting">
          <label htmlFor="size">Size:</label>
          <select id="size" name="size">
            <option value="">Select Size</option>
            {sizes.map((size, idx) => (
              <option key={idx} value={size}>{size}</option>
            ))}
          </select>

          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" step="1" defaultValue={1} />
        </div>

        <div className="setting">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" min="0" step="0.01" />
        </div>
      </div>

      <input type="submit" value="Save changes" />
    </form>
  );
}
