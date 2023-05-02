import { useRef, useState } from "react";
import {
  HomeContainer,
  PosterModal,
  Carousel,
  CarouselItem,
  CarouselBox,
} from "./home.styles";

import demoImg from "../../assets/images/demo.jpg";
import Banner from "../../components/banner/banner.component";
import NetflixHeader from "../../components/netflix-header/netflix-header.component";

const HomePage = () => {
  const carouselRef = useRef(null);
  const [clientWidth, setClientWidth] = useState(0);

  const handleNext = () => {
    const currentWidth = clientWidth + carouselRef.current.clientWidth;

    carouselRef.current.scrollTo({
      top: 0,
      left: currentWidth,
      behavior: "smooth",
    });

    setClientWidth(currentWidth);
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
    <HomeContainer>
      <NetflixHeader />
      <Banner />
      <PosterModal>
        <h1>Trending Now</h1>
        <Carousel>
          <CarouselBox className="carousel-box" ref={carouselRef}>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>
            <CarouselItem>
              <img src={demoImg} alt="demo" />
            </CarouselItem>

            {clientWidth ? (
              <button className="btn left" onClick={handlePrev}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            ) : null}
            <button className="btn right" onClick={handleNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </CarouselBox>
        </Carousel>
      </PosterModal>
    </HomeContainer>
  );
};

export default HomePage;
