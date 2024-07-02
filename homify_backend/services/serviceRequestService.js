// src/services/serviceRequestService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/service-requests/';

const createServiceRequest = (serviceType, description, location) => {
  return axios.post(API_URL + 'create/', {
    serviceType,
    description,
    location
  });
};

const getServiceRequests = () => {
  return axios.get(API_URL);
};

export default {
  createServiceRequest,
  getServiceRequests
};
