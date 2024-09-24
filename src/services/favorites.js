import axios from 'axios';

const favoritesAPI = axios.create({
  baseURL: 'http://localhost:8000/favoritos',
});

async function getFavorites() {
  const response = await favoritesAPI.get('/');
  return response.data;
}

async function postFavorites(id) {
  await favoritesAPI.post(`/${id}`);
}

async function deleteFavorites(id) {
  await favoritesAPI.delete(`/${id}`);
}

export { getFavorites, postFavorites, deleteFavorites };
