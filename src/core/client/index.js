import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpRequest;
