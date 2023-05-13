import styled from "styled-components";

export const BannerContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;

export const TitleAndInfo = styled.div`
  width: 85%;
  position: absolute;
  bottom: 20%;
  left: 10%;
  z-index: 20;

  h1 {
    font-family: "Rubik Pixels", cursive;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 5px 5px 4px #360505;
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
  }

  @media screen and (width > 640px) {
    left: 8%;
    bottom: 30%;

    h1 {
      font-size: 7.5rem;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    background: transparent;
    border: none;
    cursor: pointer;
    border: 2px solid white;
    border-radius: 100%;
    padding: 1rem;
    color: white;
    font-size: 1.4rem;

    i {
      transform: rotate(180deg);
    }
  }

  .Play_and_Info {
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
    & > button {
      font-size: 2.2rem;
    }

    .Play_and_Info {
      button {
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
      }
    }
  }

  @media screen and (width > 640px) {
    .Play_and_Info {
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
    & > button {
      font-size: 3rem;
    }

    .Play_and_Info > button > i {
      font-size: 3rem;
    }
  }
`;

export const BannerFadeEffect = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(
    transparent,
    rgb(55 52 52 / 61%),
    rgb(1 1 1)
  );

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
