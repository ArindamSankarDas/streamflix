import { lazy, Suspense } from "react";
import { links } from "../../assets/data/data";
import { useQueries } from "@tanstack/react-query";
import { wait } from "../../assets/functions/promise.func";

import { HomeContainer, CarouselList } from "./home.styles";

import OnLoad from "../../components/onLoad/onLoad.component";
import NetflixHeader from "../../components/netflix-header/netflix-header.component";

const Banner = lazy(() =>
  wait(2000).then(() => import("../../components/banner/banner.component"))
);

const CarouselContainer = lazy(() =>
  wait(3000).then(() =>
    import("../../components/carousel-container/carousel-container.component")
  )
);

const HomePage = () => {
  async function fetchData(postArr) {
    const response = await fetch(postArr.url);

    const data = await response.json();

    return { title: postArr.title, result: data.results };
  }

  const ListData = useQueries({
    queries: links.map((elem) => {
      return {
        queryKey: ["post", elem],
        queryFn: () => fetchData(elem),
      };
    }),
  });

  return (
    <HomeContainer>
      <NetflixHeader />
      <Suspense fallback={<OnLoad home />}>
        <Banner />
      </Suspense>

      <Suspense fallback={<OnLoad />}>
        <CarouselList>
          {ListData.map(({ data, isLoading }, id) =>
            isLoading ? (
              <OnLoad key={id} />
            ) : (
              <CarouselContainer
                key={id}
                data={data.result}
                title={data.title}
              />
            )
          )}
        </CarouselList>
      </Suspense>
    </HomeContainer>
  );
};

export default HomePage;
