import styled from "styled-components";

export const AuthButtonContainer = styled.button`
  margin-top: 3rem;
  width: 100%;
  background-color: red;
  color: white;
  font-size: 2.2rem;
  font-weight: 600;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem 0;
  cursor: pointer;

  &:active {
    background-color: black;
  }

  @media screen and (width > 640px) {
    width: 40rem;
  }
`;
