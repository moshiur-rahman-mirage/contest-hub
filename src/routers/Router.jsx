import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Allcontests from "../pages/Home/Allcontests/Allcontests";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/All Contests",
        element: <Allcontests />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
  },
]);

export default Router;
