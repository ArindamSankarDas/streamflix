import { useRef, useState } from "react";
import {
  Carousel,
  CarouselBox,
  CarouselContainerBox,
} from "./carousel-container.styles";

import CardItem from "../card-item/card-item.component";

const PosterContainer = ({ data, title }) => {
  const carouselRef = useRef();
  const [clientWidth, setClientWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

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
    <CarouselContainerBox>
      <h1>{title}</h1>

      <Carousel>
        <CarouselBox className="carousel-box" ref={carouselRef}>
          {data.map((elem, id) => (
            <CardItem key={id} itemData={elem} />
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
    </CarouselContainerBox>
  );
};

export default PosterContainer;
