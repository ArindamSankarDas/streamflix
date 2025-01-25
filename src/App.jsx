import React, { useEffect } from "react";
import HomePage from "./pages/home/home.page";
import NetflixWelcomePage from "./pages/netflix-welcome/netflix-welcome.page";

import { Route, Routes, useNavigate } from "react-router-dom";
import { SignIn, SignUp } from "./pages/auth/auth.page";
import { checkAuthStatus } from "./firebase/firebase.utils";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = checkAuthStatus((status) => {
      if (status) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Routes>
      <Route path='/' element={<NetflixWelcomePage />}>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='browse' element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
