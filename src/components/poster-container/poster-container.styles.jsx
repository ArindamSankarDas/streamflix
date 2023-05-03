import styled from "styled-components";

export const PosterContainerBox = styled.section`
  margin-top: 5rem;
  padding-bottom: 5rem;

  h1 {
    font-size: 2.8rem;
    padding-left: 5.5rem;
  }
`;

export const Carousel = styled.section`
  width: 100%;
  position: relative;

  .btn {
    position: absolute;
    top: 14%;
    font-size: 4rem;
    height: 18rem;
    padding: 0 1.8rem;
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
`;

export const CarouselBox = styled.div`
  width: 100%;
  padding-left: 5rem;
  width: auto;
  height: 25rem;
  overflow-y: hidden;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-auto-flow: column;
  gap: 4rem;
`;

export const CarouselItem = styled.div`
  align-self: center;
  width: 30rem;
  height: 18rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
