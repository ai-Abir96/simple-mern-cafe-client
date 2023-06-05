import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Homepage/Homepage/Home";
import MenuPage from "../components/Pages/MenuPage/MenuPage/MenuPage";
import OurShop from "../components/Pages/OurShop/OurShop/OurShop";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Dashboard from "../components/Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddItems from "../components/Pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../components/Pages/Dashboard/Admin/ManageItems/ManageItems";
import ManageBookings from "../components/Pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AllUsers from "../components/Pages/Dashboard/Admin/AllUsers/AllUsers";
import Reservations from "../components/Pages/Dashboard/User/Reservations/Reservations";
import Payment from "../components/Pages/Dashboard/User/Payment/Payment";
import AddReview from "../components/Pages/Dashboard/User/Review/AddReview";
import MyBooking from "../components/Pages/Dashboard/User/MyBooking/MyBooking";
import AdminHome from "../components/Pages/Dashboard/Admin/AdminHome/AdminHome";
import UserHome from "../components/Pages/Dashboard/User/UserHome/UserHome";
import MyCart from "../components/Pages/Dashboard/User/MyCart/MyCart";
import AdminRoute from "./AdminRoute";

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
        path: "/dashboard/@dm1n/home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/@dm1n/add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/@dm1n/manage/items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/@dm1n/manage/bookings",
        element: (
          <AdminRoute>
            <ManageBookings />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/@dm1n/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/user/home",
        element: <UserHome />,
      },
      {
        path: "/dashboard/user/reservation",
        element: <Reservations />,
      },
      {
        path: "/dashboard/user/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/user/cart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/user/review",
        element: <AddReview />,
      },
      {
        path: "/dashboard/user/booking",
        element: <MyBooking />,
      },
    ],
  },
]);
