import axios from 'axios';

const { API_BASE_URL } = process.env;

const registerUser = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, user);
  return response;
};

const authenticateUser = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, user);
  return response;
};

export {
  authenticateUser,
  registerUser
};
