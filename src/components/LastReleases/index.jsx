import React from 'react';
import { books } from './dataLastReleases';
import styled from 'styled-components';
import { Title } from '../Title';

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastReleases() {
  return (
    <LastReleasesContainer>
      <Title color="#eb9b00" fontSize="36px">
        ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} />
        ))}
      </NewBooksContainer>
    </LastReleasesContainer>
  );
}

export default LastReleases;
