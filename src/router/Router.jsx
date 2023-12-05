import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Main from "../layout/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
