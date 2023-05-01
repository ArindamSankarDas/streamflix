import React from "react";
import { HomeContainer } from "./home.styles";

import NetflixHeader from "../../components/netflix-header/netflix-header.component";
import Banner from "../../components/banner/banner.component";

const HomePage = () => {
  return (
    <HomeContainer>
      <NetflixHeader />
      <Banner />
    </HomeContainer>
  );
};

export default HomePage;
