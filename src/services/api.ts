import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.api-futebol.com.br/v1',
  headers: {
    Authorization: 'Bearer live_2b2fe8c5bb5797b4bdf4c29c45d7c8',
  },
});

export default api;
