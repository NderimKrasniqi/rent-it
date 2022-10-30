import axios from 'axios';
import tokenStorage from '../auth/storage';

export const client = axios.create({
  baseURL: `http://192.168.10.233:5000/api/v1/`,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 5000,
});

client.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      const token = await tokenStorage.getToken();
      if (token) {
        config.headers['x-auth-token'] = token;
      }
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
