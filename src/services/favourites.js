import axios from 'axios';

const favouritesAPI = axios.create({
  baseURL: 'http://localhost:8000/favoritos',
});

async function getFavourites() {
  const response = await favouritesAPI.get('/');
  return response.data;
}

export { getFavourites };
