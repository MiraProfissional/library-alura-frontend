import axios from 'axios';

const booksAPI = axios.create({ baseURL: 'http://localhost:8000/livros' });

async function getBooks() {
  const response = await booksAPI.get('/');
  return response.data;
}

export { getBooks };
