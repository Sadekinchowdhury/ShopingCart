import { createBrowserRouter } from "react-router-dom";
 
import Cart from "../Home/Cart";
import Home from "../Home/Home";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
         
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  
  export default routes;