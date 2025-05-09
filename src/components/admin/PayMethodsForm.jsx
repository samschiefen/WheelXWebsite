import React, { useEffect, useState } from 'react';
import '../../styles/stylesheet.css';

export default function PayMethodsForm() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newMethod, setNewMethod] = useState('');

  // Simulate fetching from database on mount
  useEffect(() => {
    // Simulate initial fetch
    const fetchMethods = async () => {
      const initialMethods = ['Interac', 'Bank Transfer', 'Voucher']; // Replace with actual fetch
      setPaymentMethods(initialMethods);
    };

    fetchMethods();
  }, []);

  const handleAddMethod = () => {
    const trimmed = newMethod.trim();
    if (trimmed && !paymentMethods.includes(trimmed)) {
      setPaymentMethods(prev => [...prev, trimmed]);
      setNewMethod('');
    }
  };

  const handleRemoveMethod = (methodToRemove) => {
    setPaymentMethods(prev => prev.filter(method => method !== methodToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit paymentMethods array to your backend
    console.log('Submit these methods:', paymentMethods);
  };

  return (
    <form onSubmit={handleSubmit} id="payMethodsForm" className="settingsPage">
      <div id="payMethodSettings" className="settingsDiv">
        <h3>Existing Payment Methods:</h3>
        <div id="existingPaymentMethods" className="List">
          <ul id="payMethodList">
            {paymentMethods.map((method, idx) => (
              <li key={idx} style={{ display: "flex", justifyContent: "space-between"}}>
                {method}
                <button
                  type="button"
                  className="remove"
                  onClick={() => handleRemoveMethod(method)}
                  style={{ marginRight: "10px"}}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div id="addPayMethod">
          <h3>Add New Payment Method:</h3>
          <label htmlFor="payMethodName">Payment Method Name: </label>
          <input
            type="text"
            id="payMethodName"
            name="payMethodName"
            value={newMethod}
            onChange={(e) => setNewMethod(e.target.value)}
          />
          <div>
            <button
              type="button"
              onClick={handleAddMethod}
              className="saveButtons"
              style={{ marginTop: '0.5rem' }}
            >
              Add Payment Method
            </button>
          </div>
        </div>
      </div>

      <div className="saveButtons" style={{ marginTop: '1rem' }}>
        <input type="reset" value="Cancel" />
        <input type="submit" value="Save Changes" />
      </div>
    </form>
  );
}
