import React from "react";
import HomePage from "./pages/home/home.page";
import NetflixWelcomePage from "./pages/netflix-welcome/netflix-welcome.page";

import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./pages/auth/auth.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixWelcomePage />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="browse" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
