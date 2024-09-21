import { useEffect, useState } from 'react';
import { getFavourites } from '../../services/favourites';
import styled from 'styled-components';
import defaultImage from '../../images/livro.png';

const FavouriteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

const ResultSearchFavourites = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ResultFavourite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
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
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultSearchFavourites>
          {favourites.length !== 0
            ? favourites.map((favorito) => (
                <ResultFavourite>
                  <img src={defaultImage} alt={favorito.name} />
                  <p>{favorito.name}</p>
                </ResultFavourite>
              ))
            : null}
        </ResultSearchFavourites>
      </div>
    </FavouriteContainer>
  );
}

export default Favourite;
