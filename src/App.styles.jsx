import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: ${({ bgUrl }) => `url(${bgUrl})`} no-repeat center;
  background-size: cover;
  z-index: 20;
  color: white;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }
`;

export const AboutAndEmail = styled.div`
  height: calc(100vh - 85px);
  display: grid;
  align-items: center;
  justify-items: center;
  font-family: "Roboto", sans-serif;

  section {
    width: 100vw;
    text-align: center;
    padding: 0 2rem;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 3.5rem;
  }

  h2 {
    font-weight: lighter;
    font-size: 1.8rem;

    &:first-child {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: 640px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.2rem;
    }
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  div {
    width: 90%;
    position: relative;

    h3 {
      position: absolute;
      font-weight: 700;
      font-size: 1.5rem;
      color: #8c8c8c;
      top: ${({ emailVal }) => (emailVal ? "22%" : "50%")};
      left: 8%;
      transform: translateY(-50%);
      transition: top 0.3s ease-in;
    }
  }

  input {
    width: 90%;
    background-color: #0e0d0dbf;
    outline: 1;
    outline-color: white;
    border: 0.024rem solid white;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    color: white;
    padding: 3rem 2.5rem 1rem 2.5rem;

    &:focus ~ h3 {
      top: 22%;
      transition: top 0.3s ease-in;
    }
  }

  button {
    width: fit-content;
    margin-top: 2.8rem;
    border: none;
    background-color: red;
    color: white;
    font-size: 2.5rem;
    padding: 1rem 1.8rem;
    cursor: pointer;

    &:active {
      background-color: black;
    }
  }

  @media screen and (min-width: 640px) {
    input {
      font-size: 1.8rem;
    }

    button {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      width: 40%;
    }

    button {
      margin: 0;
    }
  }
`;
