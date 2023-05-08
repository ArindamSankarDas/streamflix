import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: black;
  color: white;
  font-family: "Roboto", sans-serif;
  min-width: 100%;
  min-height: 100vh;
`;

export const CarouselList = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  @media screen and (width > 1000px) {
    gap: 3rem;
  }
`;
