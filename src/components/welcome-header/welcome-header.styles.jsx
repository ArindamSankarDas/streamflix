import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  place-items: center;
  background-color: ${({ url }) => (url === "/sign-in" ? "black" : null)};

  img {
    width: 15rem;
    margin-left: 2rem;
  }

  button {
    display: ${({ url }) => (url === "/sign-in" ? "none" : "initial")};
    margin-right: 2rem;
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 0.4rem;
    color: white;
    background-color: red;
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;

    &:active {
      background-color: black;
    }
  }

  @media screen and (width > 640px) {
    padding: 0 10rem;
    background-color: transparent;
  }

  /* @media screen and (width>740px) {
  } */
`;
