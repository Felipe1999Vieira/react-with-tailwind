import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.api-futebol.com.br/v1',
  headers: {
    Authorization: 'Bearer test_b7ea45d2eb3f6d42572ff5085a6ede',
  },
});

export default api;
