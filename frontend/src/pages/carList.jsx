import React, { useEffect, useState } from 'react';
import { getAllCars } from '../services/productService';
import './CarList.css';


function CarList() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCars()
      .then(response => {
        setCars(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading cars...</p>;

  return (
    <div className="car-list-container">
      <h2>Available Cars for Sale</h2>
      <div className="car-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.imageUrl} alt={car.make + ' ' + car.model} />
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Price: KES {car.price.toLocaleString()}</p>
            <button className="buy-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;