import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Homepage/Homepage/Home";
import MenuPage from "../components/Pages/MenuPage/MenuPage/MenuPage";
import OurShop from "../components/Pages/OurShop/OurShop/OurShop";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Dashboard from "../components/Layout/Dashboard";
import MyCart from "../components/Pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/shop",
        element: <OurShop />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/mycart",
        element: <MyCart />,
      },
    ],
  },
]);
