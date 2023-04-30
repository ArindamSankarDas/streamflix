import React from "react";
import { HomeContainer } from "./home.styles";

import NetflixHeader from "../../components/netflix-header/netflix-header.component";

const HomePage = () => {
  return (
    <HomeContainer>
      <NetflixHeader />
    </HomeContainer>
  );
};

export default HomePage;
