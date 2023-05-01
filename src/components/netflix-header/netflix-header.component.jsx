import netflixLogo from "../../assets/images/netflix-logo.png";
import profileIcon from "../../assets/images/profile-icon.jpg";

import { useState } from "react";
import {
  List,
  Item,
  HeaderContainer,
  LogoAndNavContainer,
  AccountSearchAndNotification,
} from "./netflix-header.styles";

const NetflixHeader = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [listState, setListState] = useState({
    prev: "Home",
    Home: true,
    "TV Shows": false,
    Movies: false,
    "New & Popular": false,
    "My List": false,
  });

  const handleStyles = (prev, elem) => {
    setListState((prevListState) => {
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
    <HeaderContainer>
      <LogoAndNavContainer>
        <img src={netflixLogo} alt="netflix" />
        <nav>
          <h2 onClick={() => setDropdownActive((prevState) => !prevState)}>
            Browse<i className="fa-sharp fa-solid fa-caret-down"></i>
          </h2>
          <List isActive={dropdownActive}>
            {Object.keys(listState).map((elem, id) =>
              elem !== "prev" ? (
                <Item
                  key={id}
                  onClick={() => handleStyles(listState.prev, elem)}
                  isActive={listState[elem]}
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
