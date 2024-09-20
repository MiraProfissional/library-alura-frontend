import React, { useEffect, useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { getBooks } from '../../services/books';

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
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
  margin-bottom: 20px;
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
        <ResultSearch>
          <img src={book.src} alt={book.name} />
          <p>{book.name}</p>
        </ResultSearch>
      ))}
    </SearchContainer>
  );
}

export default Search;
