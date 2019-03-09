import axios from 'axios';

import { config } from './index';

const { API_BASE_URL } = process.env;

const registerUser = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, user);
  return response;
};

const authenticateUser = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, user);
  return response;
};

const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`, config);
  return response;
};

export {
  authenticateUser,
  registerUser,
  fetchProducts
};
