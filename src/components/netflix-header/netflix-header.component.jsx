import {
  HeaderContainer,
  List,
  LogoAndNavContainer,
  AccountSearchAndNotification,
} from "./netflix-header.styles";
import netflixLogo from "../../assets/images/netflix-logo.png";
import profileIcon from "../../assets/images/profile-icon.jpg";
import { useState } from "react";

const NetflixHeader = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <HeaderContainer>
      <LogoAndNavContainer>
        <img src={netflixLogo} alt="netflix" />
        <nav>
          <h2 onClick={() => setDropdownActive((prevState) => !prevState)}>
            Browse<i class="fa-sharp fa-solid fa-caret-down"></i>
          </h2>
          <List isActive={dropdownActive}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </List>
        </nav>
      </LogoAndNavContainer>

      <AccountSearchAndNotification>
        <span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <span>
          <i class="fa-regular fa-bell"></i>
        </span>
        <img src={profileIcon} alt="profile_icon" />
      </AccountSearchAndNotification>
    </HeaderContainer>
  );
};

export default NetflixHeader;
