import React from 'react';
import { useCart } from '../context/cartcontext';
import './cart.css';
import { placeOrder } from '../Services/orderService';
import { toast } from 'react-toastify';

function Cart() {
    const handleCheckout = () => {
  const order = {
    items: cartItems.map(item => ({
      carId: item.id,
      quantity: item.quantity,
    })),
    total: getTotalPrice(),
    // optionally include customer details here if you're collecting them
  };

  placeOrder(order)
    .then(res => {
      toast.success('Order placed successfully!');
      clearCart();
      // navigate to confirmation if needed
    })
    .catch(err => {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    });
};
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart ({getTotalItems()} item{getTotalItems() > 1 ? 's' : ''})</h2>

      {cartItems.map((car) => (
        <div key={car.id} className="cart-item">
          <img src={car.imageUrl} alt={car.make + ' ' + car.model} />
          <div className="item-info">
            <h3>{car.make} {car.model} ({car.year})</h3>
            <p>Price: KES {car.price.toLocaleString()}</p>
            <p>
              Quantity:
              <input
                type="number"
                value={car.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(car.id, parseInt(e.target.value) || 1)
                }
              />
            </p>
            <button onClick={() => removeFromCart(car.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total Price: KES {getTotalPrice().toLocaleString()}</h3>
        <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        <button className="checkout-btn" onClick={handleCheckout}>
  Proceed to Checkout
</button>
      </div>
    </div>
  );
  
}

export default Cart;