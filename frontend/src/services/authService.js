// src/services/authService.js
import axios from 'axios';

export const register = async (userData) => {
  const response = await axios.post('/api/auth/register', userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post('/api/auth/login', userData);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return token ? JSON.parse(atob(token.split('.')[1])) : null;
};
