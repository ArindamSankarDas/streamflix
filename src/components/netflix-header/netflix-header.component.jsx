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

const NetflixHeader = () => {
  const [bg, setBg] = useState(false);
  const [currentList, setCurrentList] = useSessionStorage("listDat", {
    prev: "Home",
    Home: true,
    "TV Shows": false,
    Movies: false,
    "New & Popular": false,
    "My List": false,
  });

  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
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

    setDropdownActive(false);
  };

  return (
    <HeaderContainer navBg={bg}>
      <LogoAndNavContainer>
        <img src={netflixLogo} alt="netflix" />
        <nav>
          <h2 onClick={() => setDropdownActive((prevState) => !prevState)}>
            Browse<i className="fa-sharp fa-solid fa-caret-down"></i>
          </h2>
          <List isActive={dropdownActive}>
            {Object.keys(currentList).map((elem, id) =>
              elem !== "prev" ? (
                <Item
                  key={id}
                  onClick={() => handleStyles(currentList.prev, elem)}
                  isActive={currentList[elem]}
                >
                  {elem}
                </Item>
              ) : null
            )}
          </List>
        </nav>
      </LogoAndNavContainer>

      <AccountSearchAndNotification>
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span>
          <i className="fa-regular fa-bell"></i>
        </span>
        <img src={profileIcon} alt="profile_icon" />
      </AccountSearchAndNotification>
    </HeaderContainer>
  );
};

export default NetflixHeader;
