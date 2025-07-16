import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Magari Sellers 🚗</h1>
        <p>Find your perfect ride—fast, reliable, and hassle-free.</p>
        <Link to="/cars" className="cta-button">
          Browse Cars
        </Link>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>🚘 Wide Selection</h3>
          <p>From compact city cars to rugged SUVs, we’ve got your style covered.</p>
        </div>
        <div className="feature-card">
          <h3>🔍 Transparent Listings</h3>
          <p>See full specs, condition, mileage, and verified seller info upfront.</p>
        </div>
        <div className="feature-card">
          <h3>💳 Secure Payments</h3>
          <p>Fast, encrypted payment gateway for worry-free transactions.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;