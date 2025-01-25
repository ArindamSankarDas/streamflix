import { useEffect, useState } from "react";
import { useSessionStorage } from "../../hooks/useSessionStorage";

import {
  List,
  Item,
  HeaderContainer,
  LogoAndNavContainer,
  AccountSearchAndNotification,
} from "./netflix-header.styles";

import netflixLogo from "../../assets/images/netflix-logo.png";
import profileIcon from "../../assets/images/profile-icon.jpg";
import { logOut } from "../../firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

const NetflixHeader = () => {
  const [bg, setBg] = useState(false);
  const navigate = useNavigate();

  const [dropdownActive, setDropdownActive] = useState({
    navDropDown: false,
    accountDropDown: false,
  });

  const [currentList, setCurrentList] = useSessionStorage("listDat", {
    prev: "Home",
    Home: true,
    "TV Shows": false,
    Movies: false,
    "New & Popular": false,
    "My List": false,
  });

  useEffect(() => {
    const handleScroll = function () {
      if (window.scrollY > 20) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bg]);

  const handleStyles = (prev, elem) => {
    setCurrentList((prevListState) => {
      return {
        ...prevListState,
        [prev]: false,
        [elem]: true,
        prev: `${elem}`,
      };
    });

    setDropdownActive((prevState) => {
      return {
        ...prevState,
        navDropDown: false,
      };
    });
  };

  const handleDropDown = (dropDown) => {
    setDropdownActive((prevState) => {
      return {
        ...prevState,
        [dropDown]: !prevState[dropDown],
      };
    });
  };

  return (
    <HeaderContainer navBg={bg}>
      <LogoAndNavContainer>
        <img src={netflixLogo} alt='netflix' />
        <nav>
          <h2 onClick={() => handleDropDown("navDropDown")}>
            Browse<i className='fa-sharp fa-solid fa-caret-down'></i>
          </h2>
          <List isactive={dropdownActive.navDropDown}>
            {Object.keys(currentList).map((elem, id) =>
              elem !== "prev" ? (
                <Item
                  key={id}
                  onClick={() => handleStyles(currentList.prev, elem)}
                  isactive={currentList[elem]}
                >
                  {elem}
                </Item>
              ) : null
            )}
          </List>
        </nav>
      </LogoAndNavContainer>

      <AccountSearchAndNotification isactive={dropdownActive.accountDropDown}>
        <span>
          <i className='fa-solid fa-magnifying-glass'></i>
        </span>
        <span>
          <i className='fa-regular fa-bell'></i>
        </span>

        <div
          className='account'
          onClick={() => handleDropDown("accountDropDown")}
        >
          <img src={profileIcon} alt='profile_icon' />
          <i className='fa-solid fa-caret-down'></i>

          <div className='account_dropDown'>
            <ul>
              <li>
                <i className='fa-solid fa-pencil'></i>
                <h4>Manange Profiles</h4>
              </li>
              <li>
                <i className='fa-solid fa-user'></i>
                <h4>Account</h4>
              </li>
              <li>
                <i className='fa-regular fa-circle-question'></i>
                <h4>Help Centre</h4>
              </li>
            </ul>
            <button
              onClick={() => {
                logOut().then(() => {
                  navigate("/");
                });
              }}
            >
              Sign Out of Netflix
            </button>
          </div>
        </div>
      </AccountSearchAndNotification>
    </HeaderContainer>
  );
};

export default NetflixHeader;
