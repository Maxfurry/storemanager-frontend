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

const createProducts = async (product) => {
  const response = await axios.post(`${API_BASE_URL}/products`, product, config);
  return response;
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'mfnb3y9d');
  const response = await axios({
    url: 'https://api.cloudinary.com/v1_1/peerless/image/upload',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  });
  return response;
};

export {
  authenticateUser,
  registerUser,
  fetchProducts,
  createProducts,
  uploadImage
};
