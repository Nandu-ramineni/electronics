import React, { useState } from 'react';

const PaymentPage = ({ onClose, onOrderPlaced }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePayment = () => {
    // Perform payment integration with a secure payment gateway
    // For simplicity, let's assume the payment is successful
    onOrderPlaced();
  };

  return (
    <div className="payment-page">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            onChange={() => setSelectedPaymentMethod('upi')}
          />
          
        </label>
        {/* Add other payment options as needed */}
      </div>
      <button onClick={handlePayment}>Proceed to Pay</button>
      <button onClick={onClose}>Cancel</button>
    </div>
);
  }
export default PaymentPage;