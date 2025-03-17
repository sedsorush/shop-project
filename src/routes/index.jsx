import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index.jsx";
import Shop from "../pages/Shop/index.jsx";
import AboutUs from "../pages/AboutUs/index.jsx";
import Login from "../pages/Login/index.jsx";
import Collection from "../pages/Collection/index.jsx";
import Error from "../pages/Error/index.jsx";
import Product from "../pages/Product/index.jsx";
import Checkout from "../pages/Checkout/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shop/collection/:category",
        element: <Collection />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
