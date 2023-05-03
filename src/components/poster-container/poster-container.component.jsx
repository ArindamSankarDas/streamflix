import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  Carousel,
  CarouselBox,
  CarouselItem,
  PosterContainerBox,
} from "./poster-container.styles";
import axios from "axios";

const PosterContainer = () => {
  const carouselRef = useRef();
  const [clientWidth, setClientWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const API_KEY = "375b53f7c31dd1ed7e388db6bf583b15";
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  async function fetchData() {
    const response = await axios(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );

    const { results } = response.data;

    return results;
  }

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  const handleNext = () => {
    const scrollCalculation =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    if (clientWidth <= scrollCalculation) {
      const currentWidth = clientWidth + carouselRef.current.clientWidth;

      carouselRef.current.scrollTo({
        top: 0,
        left: currentWidth,
        behavior: "smooth",
      });

      setClientWidth(currentWidth);
      setScrollWidth(scrollCalculation);
    }

    return;
  };

  const handlePrev = () => {
    if (clientWidth < 1) {
      return;
    }

    const currentWidth = clientWidth - carouselRef.current.clientWidth;

    carouselRef.current.scrollTo({
      top: 0,
      left: currentWidth,
      behavior: "smooth",
    });

    setClientWidth(currentWidth);
  };

  return (
    <PosterContainerBox>
      <h1>Trending Now</h1>

      <Carousel>
        {postQuery.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <CarouselBox className="carousel-box" ref={carouselRef}>
            {postQuery.data.map((elem) => (
              <CarouselItem key={elem.id}>
                <img src={baseImgUrl + elem.backdrop_path} alt="img" />
              </CarouselItem>
            ))}

            {clientWidth ? (
              <button className="btn left" onClick={handlePrev}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            ) : null}

            {clientWidth <= scrollWidth ? (
              <button className="btn right" onClick={handleNext}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            ) : null}
          </CarouselBox>
        )}
      </Carousel>
    </PosterContainerBox>
  );
};

export default PosterContainer;
