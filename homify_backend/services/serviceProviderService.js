// src/services/serviceProviderService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/service-providers/';

const registerServiceProvider = (name, serviceType, location, contactNumber) => {
  return axios.post(API_URL + 'register/', {
    name,
    serviceType,
    location,
    contactNumber
  });
};

export default {
  registerServiceProvider
};
