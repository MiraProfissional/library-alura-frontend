import styled from 'styled-components';
import Search from '../../components/Search';
import LastReleases from '../../components/LastReleases';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function Home() {
  return (
    <HomeContainer>
      <Search />
      <LastReleases />
    </HomeContainer>
  );
}

export default Home;
