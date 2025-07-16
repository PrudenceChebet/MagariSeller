import axios from 'axios';

const ORDER_API = 'http://localhost:5000/api/orders'; // Adjust to your backend

export const placeOrder = (orderData) => {
  return axios.post(ORDER_API, orderData);
};