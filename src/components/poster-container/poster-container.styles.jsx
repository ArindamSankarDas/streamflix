import styled from "styled-components";

export const PosterContainerBox = styled.section`
  margin-top: 5rem;
  padding-bottom: 3rem;

  h1 {
    font-size: 1.8rem;
    padding-left: 1.8rem;
    font-weight: 500;
  }

  @media screen and (width > 500px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (width > 1000px) {
    h1 {
      font-size: 2.5rem;
      padding-left: 5.5rem;
    }
  }
`;

export const Carousel = styled.section`
  width: 100%;
  height: auto;
  position: relative;
`;

export const CarouselBox = styled.div`
  width: 100%;
  padding-left: 1.8rem;
  width: auto;
  height: 14rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-auto-flow: column;
  gap: 0.5rem;

  .btn {
    position: absolute;
    height: 10.4rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    padding: 0 0.8rem;
    border: none;
    background: #040404bd;
    color: white;
    cursor: pointer;
    text-align: center;

    &:hover {
      background: #383535bd;
    }
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  @media screen and (width > 500px) {
    height: 18rem;

    .btn {
      height: 12.7rem;
    }
  }

  @media screen and (width > 1000px) {
    padding-left: 5rem;
    gap: 3rem;

    .btn {
      font-size: 2.2rem;
      padding: 0 1.8rem;
      height: 14.9rem;
    }
  }
`;

export const CarouselItem = styled.div`
  align-self: center;
  width: 18rem;
  border-radius: 0.2rem;
  transition: all 0.2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
  }

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (width > 500px) {
    width: 22rem;
  }

  @media screen and (width > 1000px) {
    width: 26rem;
  }
`;
