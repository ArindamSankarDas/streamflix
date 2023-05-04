import { lazy, Suspense } from "react";
import { wait } from "../../assets/functions/promise.func";

import { HomeContainer } from "./home.styles";

import OnLoad from "../../components/onLoad/onLoad.component";
import NetflixHeader from "../../components/netflix-header/netflix-header.component";

const Banner = lazy(() =>
  wait(2000).then(() => import("../../components/banner/banner.component"))
);
const PosterContainer = lazy(() =>
  wait(2000).then(() =>
    import("../../components/poster-container/poster-container.component")
  )
);

const HomePage = () => {
  return (
    <HomeContainer>
      <NetflixHeader />
      <Suspense fallback={<OnLoad home />}>
        <Banner />
        <PosterContainer />
      </Suspense>
    </HomeContainer>
  );
};

export default HomePage;
