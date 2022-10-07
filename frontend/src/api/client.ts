import axios from 'axios';
export const client = axios.create({
  baseURL: `http://192.168.10.233:5000/api/v1/`,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 500,
});
