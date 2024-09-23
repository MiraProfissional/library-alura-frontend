import styled from 'styled-components';
import Search from '../../components/Search';
import LastReleases from '../../components/LastReleases';

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
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
