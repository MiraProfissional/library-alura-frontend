import React, { useEffect, useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { getBooks } from '../../services/books';
import defaultImage from '../../images/livro.png';
import { postFavorites } from '../../services/favorites';

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  min-height: 80vh;
  width: 100%;
  padding-top: 85px;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ResultSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setBooks(booksAPI);
  }

  async function insertFavorite(id) {
    await postFavorites(id);
    alert(`Livro com id ${id} inserido!`);
  }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar</Title>
      <SubTitle>Encontre seu livro em nossa estante</SubTitle>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onBlur={(e) => {
          const digitedText = e.target.value;
          const resultSearch = books.filter((book) =>
            book.name.includes(digitedText)
          );
          setSearchedBooks(resultSearch);
        }}
      />
      {searchedBooks.map((book) => (
        <ResultSearch onClick={() => insertFavorite(book.id)}>
          <img src={defaultImage} alt={book.name} />
          <p>{book.name}</p>
        </ResultSearch>
      ))}
    </SearchContainer>
  );
}

export default Search;
