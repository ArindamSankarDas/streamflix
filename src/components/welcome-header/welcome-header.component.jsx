import { Header } from "./welcome-header.styles";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import netflixLogo from "../../assets/images/netflix-logo.png";

const WelcomeHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Header url={pathname}>
        <img
          src={netflixLogo}
          alt="netflix-png"
          onClick={() => navigate("/")}
        />
        <button onClick={() => navigate("/sign-in")}>Sign In</button>
      </Header>
      <Outlet />
    </>
  );
};

export default WelcomeHeader;
