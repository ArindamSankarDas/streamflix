import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./pages/home/home.page.jsx";
import ErrorPage from "./pages/error/error.page.jsx";
import { SignIn, SignUp } from "./pages/auth/auth.page.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "browse",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
