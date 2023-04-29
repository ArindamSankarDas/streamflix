import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  width: 100%;
  height: calc(100vh - 84px);
  background-color: black;
  font-family: "Roboto", sans-serif;
  display: grid;
  place-items: center;
  padding: 0 3rem;

  & > div {
    width: 100%;
  }

  & > div > h2 {
    margin-top: 3rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #737373;
  }

  @media screen and (width > 640px) {
    background-color: transparent;

    div {
      width: auto;
      padding: 2.5rem 1.8rem;
      background-color: #000000ad;
    }

    & > div > h2 {
      margin-left: 2rem;
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  height: auto;

  h1 {
    font-size: 2.8rem;
  }

  @media screen and (width > 640px) {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      align-self: baseline;
      padding-left: 1.9rem;
    }
  }
`;

export const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
