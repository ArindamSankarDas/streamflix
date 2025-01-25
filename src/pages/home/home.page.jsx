import { HomeContainer, CarouselList } from "./home.styles";
import OnLoad from "../../components/onLoad/onLoad.component";
import NetflixHeader from "../../components/netflix-header/netflix-header.component";

import { lazy, Suspense, useState } from "react";

import { links } from "../../assets/data/data";
import { useQueries } from "@tanstack/react-query";
import { wait } from "../../assets/functions/promise.func";

const Banner = lazy(() =>
  wait(2000).then(() => import("../../components/banner/banner.component"))
);

const PopUpModal = lazy(() =>
  import("../../components/pop-up-modal/pop-up-modal.component")
);

const CarouselContainer = lazy(() =>
  wait(3000).then(() =>
    import("../../components/carousel-container/carousel-container.component")
  )
);

const HomePage = () => {
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    modalData: null,
  });

  async function fetchData(postArr) {
    const response = await fetch(postArr.url);

    const data = await response.json();

    return { title: postArr.title, result: data.results };
  }

  const ListData = useQueries({
    queries: links.map((elem, id) => {
      return {
        queryKey: ["post", id],
        queryFn: () => fetchData(elem),
      };
    }),
  });

  return (
    <HomeContainer>
      <NetflixHeader />
      <Suspense fallback={<OnLoad home />}>
        <Banner />
        <CarouselList>
          {ListData.map(({ data, isLoading }, id) =>
            isLoading ? (
              <OnLoad key={id} />
            ) : (
              <CarouselContainer
                key={id}
                data={data.result}
                title={data.title}
                handleModalState={setModalInfo}
              />
            )
          )}
        </CarouselList>
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        {modalInfo.isOpen && modalInfo.modalData ? (
          <PopUpModal
            modalData={modalInfo.modalData}
            onClose={() => setModalInfo({ isOpen: false, modalData: null })}
          />
        ) : null}
      </Suspense>
    </HomeContainer>
  );
};

export default HomePage;
