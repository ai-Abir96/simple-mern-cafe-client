import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import "swiper/css";
const Main = () => {
  const location = useLocation();

  const excludeNavFoot = location.pathname.includes("login");
  return (
    <div>
      {excludeNavFoot || <Navbar />}
      <Outlet></Outlet>
      {excludeNavFoot || <Footer />}
    </div>
  );
};

export default Main;
