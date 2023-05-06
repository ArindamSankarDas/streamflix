import { lazy, Suspense, useEffect, useState } from "react";
import { wait } from "../../assets/functions/promise.func";
import { links } from "../../assets/data/data";

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
  const API_KEY = "375b53f7c31dd1ed7e388db6bf583b15";
  const [list, setList] = useState([]);

  async function fetchData(url, title) {
    const response = await fetch(`${url}${API_KEY}`);

    const data = await response.json();

    setList((prevList) => [...prevList, { title, result: data.results }]);
  }

  useEffect(() => {
    links.map((elem) => fetchData(elem.url, elem.title));
  }, []);
  return (
    <HomeContainer>
      <NetflixHeader />
      <Suspense fallback={<OnLoad home />}>
        <Banner />
        
        {list.map((elem, id) => (
          <PosterContainer key={id} data={elem.result} title={elem.title} />
        ))}
      </Suspense>
    </HomeContainer>
  );
};

export default HomePage;
