import styled from "styled-components";

export const CardItemContainer = styled.div`
  align-self: center;
  width: 18rem;
  border-radius: 0.2rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

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
