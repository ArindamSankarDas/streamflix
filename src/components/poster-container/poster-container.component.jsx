import { useRef, useState } from "react";
import {
  Carousel,
  CarouselBox,
  CarouselItem,
  PosterContainerBox,
} from "./poster-container.styles";

const PosterContainer = ({ data, title }) => {
  const carouselRef = useRef();
  const [clientWidth, setClientWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  const handleNext = () => {
    const scrollCalculation =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const currentWidth = clientWidth + carouselRef.current.clientWidth;

    if (clientWidth <= scrollCalculation) {
      carouselRef.current.scrollTo({
        top: 0,
        left: currentWidth,
        behavior: "smooth",
      });

      setClientWidth(currentWidth);

      if (scrollWidth !== scrollCalculation) {
        setScrollWidth(scrollCalculation);
      }
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
      <h1>{title}</h1>

      <Carousel>
        <CarouselBox className="carousel-box" ref={carouselRef}>
          {data.map((elem) => (
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
      </Carousel>
    </PosterContainerBox>
  );
};

export default PosterContainer;
