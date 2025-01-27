import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: ${({ navBg }) => (navBg ? "black" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
  transition: background-color 0.5s linear;
`;

export const LogoAndNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  img {
    width: 8rem;
  }

  nav {
    position: relative;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    user-select: none;

    i {
      margin-left: 0.5rem;
    }
  }

  @media screen and (width > 400px) {
    gap: 1rem;

    h2 {
      font-size: 1.5rem;

      i {
        margin-left: 1rem;
      }
    }

    img {
      width: 10rem;
    }
  }

  @media screen and (width > 1024px) {
    gap: 4rem;

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
  top: ${({ isactive }) => (!isactive ? "-100rem" : "4rem")};
  font-size: 1.4rem;
  width: 22rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #181717cc;
  transition: all 0.4s ease-in-out;

  @media screen and (width > 1024px) {
    position: static;
    z-index: auto;
    opacity: 1;
    background: transparent;
    width: auto;
    flex-direction: row;
    gap: 3rem;
    font-size: 1.5rem;
    animation: none;
  }
`;

export const Item = styled.li`
  color: ${({ isactive }) => (isactive ? "white" : "#ccc6c6")};
  font-weight: 500;
  padding: 2rem 0;
  cursor: pointer;

  &:hover {
    color: white;
    transition: color 0.2s linear;
  }
`;

export const AccountSearchAndNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  span {
    font-size: 1.3rem;
    cursor: pointer;
  }

  img {
    width: 2.8rem;
    cursor: pointer;
  }

  .account {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    i {
      font-size: 1.7rem;
    }

    .account_dropDown {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: calc(100% + 1rem);
      right: ${({ isactive }) => (isactive ? "8%" : "-100rem")};
      width: fit-content;
      background-color: #0f0f0fe0;
      transition: right 0.3s ease-in-out;

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 2rem 2.2rem;
        gap: 1.7rem;

        li {
          width: 15rem;
          display: flex;
          flex-wrap: nowrap;
          gap: 2rem;
          justify-content: center;
          align-items: center;

          h4 {
            font-size: 1.2rem;
            font-weight: normal;
            width: 100%;
          }

          &:hover {
            h4 {
              text-decoration: underline;
            }
          }
        }
      }

      button {
        color: white;
        background: transparent;
        border: none;
        padding: 1rem 2rem;
        border-top: 1px solid gray;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (width > 400px) {
    gap: 2rem;
    span {
      font-size: 1.8rem;
    }

    img {
      width: 3.5rem;
    }
  }

  @media screen and (width > 1024px) {
    gap: 4rem;
  }
`;
