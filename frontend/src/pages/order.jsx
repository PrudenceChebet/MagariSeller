import React from 'react';
import { useLocation } from 'react-router-dom';
import './order.css';

function Order() {
  const { state } = useLocation();
  const { customer, items, total, orderId } = state || {};

  return (
    <div className="confirmation-container">
      <h1>Thank you for your purchase, {customer?.name || 'Valued Buyer'}! 🎉</h1>
      
      <p>Your order has been confirmed and is being processed.</p>

      <div className="order-summary">
        <h3>Order ID: <span>{orderId || '—'}</span></h3>
        <p><strong>Delivery Location:</strong> {customer?.location}</p>
        <p><strong>Estimated Delivery:</strong> Within 3–5 business days</p>
      </div>

      <h3>Summary of Your Order:</h3>
      <div className="ordered-cars">
        {items?.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.imageUrl} alt={car.make + ' ' + car.model} />
            <div>
              <h4>{car.make} {car.model} ({car.year})</h4>
              <p>Quantity: {car.quantity}</p>
              <p>Price: KES {(car.price * car.quantity).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="total-section">
        <h3>Total Paid: KES {total?.toLocaleString()}</h3>
      </div>
    </div>
  );
}

export default Order;