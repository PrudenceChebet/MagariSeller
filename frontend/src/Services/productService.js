import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // adjust if needed

export const getAllCars = () => axios.get(API_URL);
export const getCarById = (id) => axios.get(`${API_URL}/${id}`);