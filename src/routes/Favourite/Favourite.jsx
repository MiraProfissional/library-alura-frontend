import { useEffect, useState } from 'react';
import { getFavourites } from '../../services/favourites';
import styled from 'styled-components';

const FavouriteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
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

function Favourite() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchFavourites();
  }, []);

  async function fetchFavourites() {
    const favouritesAPI = await getFavourites();
    setFavourites(favouritesAPI);
  }

  return (
    <FavouriteContainer>
      {favourites.map((favaouriteBook) => (
        <ResultSearch>
          <img src={favaouriteBook.src} alt={favaouriteBook.nome} />
          <p>{favaouriteBook.name}</p>
        </ResultSearch>
      ))}
    </FavouriteContainer>
  );
}

export default Favourite;
