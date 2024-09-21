import axios from 'axios';

const favouritesAPI = axios.create({
  baseURL: 'http://localhost:8000/favoritos',
});

async function getFavourites() {
  const response = await favouritesAPI.get('/');
  return response.data;
}

async function postFavourites(id) {
  await favouritesAPI.post(`/${id}`);
}

async function deleteFavourites(id) {
  await favouritesAPI.delete(`/${id}`);
}

export { getFavourites, postFavourites, deleteFavourites };
