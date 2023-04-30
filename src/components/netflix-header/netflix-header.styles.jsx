import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0%{
        z-index: -1; 
        opacity: 0;
    }
    30%{
        z-index: auto;
        opacity: 0.5;
    }
    50%{
        z-index: auto;
        opacity: 0.8;
    }
    100%{
        z-index: auto;
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0%{
        z-index: auto; 
        opacity: 1;
    }
    30%{
        z-index: auto;
        opacity: 0.8;
    }
    50%{
        z-index: auto;
        opacity: 0.5;
    }
    80%{
        z-index: auto;
        opacity: 0;
    }

    100%{
        z-index: -1;
        opacity: 0;
    }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
`;

export const LogoAndNavContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 10rem;
    margin-right: 1rem;
  }

  nav {
    position: relative;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    user-select: none;

    i {
      margin-left: 1rem;
    }
  }

  @media screen and (width > 1024px) {
    h2 {
      display: none;
    }

    img {
      width: 12.8rem;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  position: absolute;
  top: 4rem;
  font-size: 1.4rem;
  width: 22rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #181717cc;
  z-index: ${({ isActive }) => (!isActive ? -1 : "auto")};
  opacity: ${({ isActive }) => (!isActive ? 0 : 1)};
  animation: ${({ isActive }) => (isActive ? fadeIn : fadeOut)} 1s ease-in;

  li {
    padding: 2rem 0;
    cursor: pointer;
  }

  @media screen and (width > 1024px) {
    position: static;
    z-index: auto;
    opacity: 1;
    background: transparent;
    width: auto;
    flex-direction: row;
    gap: 2rem;
    font-size: 1.5rem;
    animation: none;
  }
`;

export const AccountSearchAndNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  span {
    font-size: 1.8rem;
    cursor: pointer;
  }

  img {
    width: 3.5rem;
    cursor: pointer;
  }
`;
