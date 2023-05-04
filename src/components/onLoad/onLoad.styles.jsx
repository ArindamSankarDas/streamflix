import styled, { css, keyframes } from "styled-components";

const isHomeActive = css`
  margin-top: 0;
  padding-top: 10rem;
`;

const isHomeNotActive = css`
  margin-top: 1rem;
`;

const skeleton_loading = keyframes`
  0%{
    background-color: hsl(199deg, 2%, 16%);
  }

  100%{
    background-color: hsl(200deg, 2%, 30%);
  }
`;

export const OnLoadContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-auto-flow: column;
  gap: 2rem;
  overflow: hidden;
  padding-left: 1.8rem;
  ${({ isHome }) => (isHome ? isHomeActive : isHomeNotActive)}

  div {
    width: 60vw;
    height: 12vh;
    animation: ${skeleton_loading} 1s linear infinite alternate;
    border-radius: 0.3rem;
  }

  @media screen and (width > 400px) {
    div {
      width: 50vw;
      height: 16vh;
    }
  }

  @media screen and (width > 520px) {
    div {
      width: 40vw;
    }
  }

  @media screen and (width > 640px) {
    div {
      width: 30vw;
    }
  }

  @media screen and (width > 740px) {
    div {
      width: 25rem;
    }
  }

  @media screen and (width > 1000px) {
    padding-left: 5.5rem;
  }
`;
