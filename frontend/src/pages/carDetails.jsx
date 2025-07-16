import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../Services/productService';
import './carDetails.css';

function CarDetails() {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarById(carId)
      .then(response => {
        setCar(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch car details:', error);
        setLoading(false);
      });
  }, [carId]);

  if (loading) return <p>Loading car details...</p>;
  if (!car) return <p>Car not found.</p>;

  return (
    <div className="car-details-container">
      <img src={car.imageUrl} alt={car.make + ' ' + car.model} className="car-image" />
      <div className="car-info">
        <h2>{car.make} {car.model} ({car.year})</h2>
        <p><strong>Price:</strong> KES {car.price.toLocaleString()}</p>
        <p><strong>Mileage:</strong> {car.mileage} km</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Fuel Type:</strong> {car.fuelType}</p>
        <p><strong>Description:</strong> {car.description}</p>
        <button className="buy-btn">Buy This Car</button>
      </div>
    </div>
  );
}

export default CarDetails;