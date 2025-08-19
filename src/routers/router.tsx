import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import Gallery from "../pages/Gallery";
import Artist from "../pages/Artist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "artist/:slug",
        element: <Artist />,
      },
    ],
  },
]);

export default router;
