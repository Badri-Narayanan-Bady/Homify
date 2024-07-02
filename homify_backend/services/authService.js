// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'signup/', {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'login/', {
    username,
    password
  });
};

const logout = () => {
  return axios.post(API_URL + 'logout/');
};

export default {
  register,
  login,
  logout
};
