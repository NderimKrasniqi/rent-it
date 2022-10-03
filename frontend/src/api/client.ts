import axios from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.10.233:5000/api/v1/auth',
  headers: {
    'Content-type': 'application/json',
  },
});

export default client;
