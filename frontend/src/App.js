import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CarList from './pages/carList';
import CarDetails from './pages/carDetails'; 
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Order from './pages/order';
// make sure you've created this file
// import other pages here as you build them

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:carId" element={<CarDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />


        {/* <Route path="/cars" element={<CarList />} />
        <Route path="/checkout" element={<Checkout />} /> */}
        {/* Add more routes as needed */}
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;