import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #161515cf;
  z-index: 30;
  display: grid;
  place-items: center;
`;

export const Modal = styled.div`
  width: 95%;
  height: auto;
  background-color: #272525;
  border-radius: 1.2rem;

  @media screen and (width > 500px) {
    width: 90%;
  }
  @media screen and (width > 700px) {
    width: 70%;
  }

  @media screen and (width > 1024px) {
    width: 50%;
  }
`;

export const ModalBanner = styled.div`
  position: relative;

  .img {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 1.2rem 1.2rem 0 0;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #00000085;
      border-radius: 1.2rem 1.2rem 0 0;
    }
  }

  .close_btn {
    z-index: 20;
    position: absolute;
    top: 4%;
    right: 4%;
    color: white;
    background-color: #262525;
    border: 2px solid transparent;
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    border-radius: 100%;
    cursor: pointer;

    &:active {
      border: 2px solid white;
    }
  }

  @media screen and (width > 500px) {
    .close_btn {
      font-size: 2rem;
      padding: 1rem 1.5rem;
    }
  }
`;

export const ModalInfo = styled.div`
  padding: 2rem;

  h1 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
    text-align: justify;
  }

  @media screen and (width > 400px) {
    padding: 3rem;
  }

  @media screen and (width > 500px) {
    h1 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (width > 700px) {
    padding: 3rem 5rem 5rem 5rem;

    h1 {
      font-size: 2.6rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const TrailerVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  padding: 3rem 1rem;
  border-radius: 0.8rem;
  background-color: #262525;
  border: 1px solid white;

  iframe {
    width: 90vw;
    height: 40vh;
  }

  button {
    position: absolute;
    top: 2%;
    right: 4%;
    color: white;
    background-color: #545050;
    border: 2px solid transparent;
    font-size: 1.5rem;
    padding: 0.8rem 1.2rem;
    border-radius: 100%;
    cursor: pointer;

    &:active {
      border: 2px solid white;
    }
  }

  @media screen and (width > 600px) {
    iframe {
      height: 60vh;
    }
  }
  @media screen and (width > 900px) {
    padding: 8rem 2rem;

    iframe {
      width: 80vw;
      height: 75vh;
    }
  }
`;

export const TitleAndControl = styled.div`
  position: absolute;
  bottom: 10%;
  left: 6%;

  .is_movie_or_series {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    img {
      width: 1.7rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

  h1 {
    font-size: 2rem;
    font-family: "Rubik Pixels", cursive;
    font-weight: 700;
    margin-top: 1rem;
    padding-right: 1rem;
  }

  .btn-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0;
    margin-top: 0.2rem;

    button {
      position: relative;

      &:focus {
        &::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 1.2rem);
          height: calc(100% + 1.2rem);
          border: 2px solid white;
          border-radius: 100%;
        }
      }
    }

    .btn {
      background-color: #3b37378f;
      color: white;
      font-size: 2.5rem;
      padding: 0.7rem 1rem;
      scale: 0.6;
      border-radius: 100%;
      border: 3px solid grey;
      cursor: pointer;
    }
  }

  #play-btn {
    height: fit-content;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    gap: 1rem;
    border: 2px solid transparent;
    background-color: white;

    i {
      font-size: 1.5rem;
    }

    &:hover {
      background-color: #bcb9b9;
    }

    &:focus {
      &::before {
        border-radius: 0.5rem;
      }
    }
  }

  @media screen and (width > 400px) {
    .is_movie_or_series {
      img {
        width: 3rem;
      }

      h2 {
        font-size: 2.2rem;
      }
    }

    h1 {
      margin-top: 1.5rem;
      font-size: 3rem;
    }

    .btn-container {
      margin-top: 1.8rem;
      gap: 1rem;

      .btn {
        scale: 0.8;
      }
    }

    #play-btn {
      font-size: 1.8rem;
      padding: 0.5rem 1.2rem;

      i {
        font-size: 2.3rem;
      }
    }
  }

  @media screen and (width > 500px) {
    #play-btn {
      font-size: 2rem;
      padding: 0.9rem 3rem;
    }
  }

  @media screen and (width > 730px) {
    #play-btn {
      padding: 1rem 3rem;
    }
  }
  @media screen and (width > 1024px) {
    .btn-container {
      .btn {
        scale: 1;
      }
    }
  }
`;
