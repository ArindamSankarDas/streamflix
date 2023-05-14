import styled from "styled-components";

export const CarouselContainerBox = styled.section`
  h1 {
    font-size: 1.4rem;
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
      font-size: 1.4vw;
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
  overflow-y: hidden;
  overflow-x: scroll;
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-auto-flow: column;
  gap: 0.5rem;

  &::-webkit-scrollbar {
    overflow: hidden;
  }

  .btn {
    display: none;
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
    overflow: hidden;
    padding-left: 5rem;
    gap: 3rem;

    .btn {
      font-size: 2.2rem;
      padding: 0 1.8rem;
      height: 14.9rem;
    }

    &:hover {
      .btn {
        display: initial;
      }
    }
  }
`;
