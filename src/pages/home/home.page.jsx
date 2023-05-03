import { HomeContainer } from "./home.styles";

import PosterContainer from "../../components/poster-container/poster-container.component";

import Banner from "../../components/banner/banner.component";
import NetflixHeader from "../../components/netflix-header/netflix-header.component";

const HomePage = () => {
  return (
    <HomeContainer>
      <NetflixHeader />
      <Banner />
      <PosterContainer />
    </HomeContainer>
  );
};

export default HomePage;
