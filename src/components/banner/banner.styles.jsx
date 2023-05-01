import styled from "styled-components";

export const BannerContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;

  & > button {
    position: absolute;
    bottom: 30%;
    right: 5%;
    z-index: 20;
    background: transparent;
    border: none;
    cursor: pointer;
    border: 3px solid white;
    border-radius: 100%;
    padding: 0.5rem 0.8rem;

    img {
      position: relative;
      top: 0.2rem;
      right: 0.3rem;
      width: 1.4rem;
      transform: rotate(180deg);
    }
  }

  @media screen and (width > 400px) {
    button {
      img {
        width: 2.2rem;
      }
    }
  }

  @media screen and (width > 740px) {
    button {
      img {
        width: 3.2rem;
      }
    }
  }
`;

export const TitleAndInfo = styled.div`
  position: absolute;
  bottom: 20%;
  left: 10%;

  h1 {
    font-family: "Rubik Pixels", cursive;
    font-size: 2rem;
    font-weight: 500;
    text-shadow: 4px 5px 4px #ffff;
  }

  .btn-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;

    button {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 1rem;
      border: none;
      padding: 0.5rem 0.9rem;
      border-radius: 0.5rem;
      cursor: pointer;
      gap: 1rem;
      border: 2px solid transparent;
      z-index: 100;

      i {
        font-size: 1rem;
      }

      &:first-child {
        background-color: white;

        &:hover {
          background-color: #bcb9b9;
        }
      }

      &:last-child {
        background-color: #1d1c1cc2;
        color: white;

        &:hover {
          background-color: rgb(29 28 28 / 48%);
        }
      }

      &:focus {
        &::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 1rem);
          height: calc(100% + 1.2rem);
          border: 2px solid white;
          border-radius: 0.5rem;
        }
      }
    }
  }

  @media screen and (width > 400px) {
    h1 {
      font-size: 4rem;
    }

    .btn-container {
      button {
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
      }
    }
  }

  @media screen and (width > 640px) {
    left: 8%;
    bottom: 30%;

    h1 {
      font-size: 7.5rem;
    }

    .btn-container {
      button {
        font-size: 2rem;
        padding: 1rem 3.2rem;

        i {
          font-size: 2rem;
        }
      }
    }
  }

  @media screen and (width > 740px) {
    .btn-container > button > i {
      font-size: 3rem;
    }
  }
`;
