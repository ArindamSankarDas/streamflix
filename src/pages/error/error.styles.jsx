import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  background-color: #2c3639;
  color: white;

  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.9rem;
    text-align: center;
    margin-bottom: 1.4rem;
  }

  @media screen and (width < 300px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
      padding: 0 0.5rem;
    }
  }
`;
