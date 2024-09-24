import { useEffect, useState } from 'react';
import { deleteFavorites, getFavorites } from '../../services/favorites';
import styled from 'styled-components';
import defaultImage from '../../images/livro.png';

const FavoriteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

const ResultSearchFavorites = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ResultFavorite = styled.div`
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

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  async function fetchFavorites() {
    const favoritesAPI = await getFavorites();
    setFavorites(favoritesAPI);
  }

  async function deleteFavorite(id) {
    await deleteFavorites(id);
    alert(`Livro com id ${id} deletado!`);
    await fetchFavorites();
  }

  return (
    <FavoriteContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultSearchFavorites>
          {favorites.length !== 0
            ? favorites.map((favorite) => (
                <ResultFavorite onClick={() => deleteFavorite(favorite.id)}>
                  <img src={defaultImage} alt={favorite.name} />
                  <p>{favorite.name}</p>
                </ResultFavorite>
              ))
            : null}
        </ResultSearchFavorites>
      </div>
    </FavoriteContainer>
  );
}

export default Favorites;
