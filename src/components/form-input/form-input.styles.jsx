import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 3rem;

  input {
    width: 100%;
    background-color: #333;
    outline: 0;
    border: none;
    font-size: 1.8rem;
    color: white;
    padding: 3rem 2rem 0.8rem 2rem;
    border-radius: 0.3rem;

    &:focus ~ label {
      top: 20%;
      transition: top 0.1s linear;
    }
  }

  @media screen and (width > 640px) {
    width: auto;
    margin: 0;  

    input {
      width: 40rem;

      &:focus ~ label {
        top: 33%;
      }
    }
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: ${({ isempty }) => (isempty ? "20%" : "50%")};
  left: 2rem;
  transform: translateY(-50%);
  font-weight: 500;
  font-size: 1.4rem;
  color: #8c8c8c;
  transition: top 0.1s linear;

  @media screen and (width > 640px) {
    top: ${({ isempty }) => (isempty ? "33%" : "50%")};
    left: 3.5rem;
  }
`;
