import { useEffect, useState } from 'react';
import { deleteFavourites, getFavourites } from '../../services/favourites';
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

  async function deleteFavourite(id) {
    await deleteFavourites(id);
    alert(`Livro com id ${id} deletado!`);
    await fetchFavourites();
  }

  return (
    <FavouriteContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultSearchFavourites>
          {favourites.length !== 0
            ? favourites.map((favourite) => (
                <ResultFavourite onClick={() => deleteFavourite(favourite.id)}>
                  <img src={defaultImage} alt={favourite.name} />
                  <p>{favourite.name}</p>
                </ResultFavourite>
              ))
            : null}
        </ResultSearchFavourites>
      </div>
    </FavouriteContainer>
  );
}

export default Favourite;
