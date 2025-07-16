import React, { useState } from 'react';
import { useCart } from '../context/cartcontext';
import { placeOrder } from '../Services/orderService';
import { toast } from 'react-toastify';
import './checkout.css';
import { useNavigate } from 'react-router-dom';

function Checkout() {
const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', location: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      customer: form,
      items: cartItems.map(item => ({
        carId: item.id,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
    };

    placeOrder(orderData)
      .then(res => {
        toast.success('Order placed successfully!');
        clearCart();
        // Optionally navigate to tracking page with order ID:
        // navigate(`/track/${res.data.orderId}`);
        navigate('/confirmation', {
  state: {
    customer: form,
    items: cartItems,
    total: getTotalPrice(),
    orderId: res.data.orderId,
  },
});
      })
      .catch(err => {
        toast.error('Order failed. Please try again.');
        console.error(err);
      });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <input name="location" placeholder="Delivery Location" value={form.location} onChange={handleChange} required />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
  
}

export default Checkout;