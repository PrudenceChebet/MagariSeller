import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Eye, Fuel, Calendar, Settings, Star } from 'lucide-react';
import { useCart } from '../context/cartcontext';
import { toast } from 'react-toastify';

const CarCard = ({ car }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(car);
    toast.success(`${car.make} ${car.model} has been added to your cart.`);
  };

  const handleViewDetails = () => {
    navigate(`/cars/${car.id}`);
  };

  const formatPrice = (price) => {
    return `KES ${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Image */}
      <div className="relative">
        <img
          src={car.imageUrl}
          alt={`${car.make} ${car.model}`}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-blue-500 hover:text-white backdrop-blur-sm transition-colors"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">
            {car.make} {car.model}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>

        <p className="text-3xl font-bold text-blue-600 mb-4">
          {formatPrice(car.price)}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-2">{car.mileage} km</p>

        {showDetails && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-3">{car.description}</p>
            <div className="flex flex-wrap gap-2">
              {car.features?.map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-2 mt-6">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Add to Cart
          </button>
          <button
            onClick={handleViewDetails}
            className="px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;