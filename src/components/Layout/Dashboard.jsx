import { Link, Outlet } from "react-router-dom";

const adminDashboard = (
  <>
    <li className=" uppercase">
      <Link to="/dashboard/@dm1n/home">Admin | Home</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/@dm1n/add-items">Add items</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/@dm1n/manage/items">manage items</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/@dm1n/manage/bookings">
        Manage Bookings
      </Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/@dm1n/all-users">All users</Link>
    </li>
  </>
);
const userDashboard = (
  <>
    <li className=" uppercase">
      <Link to="/dashboard/user/home">user | Home</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/user/reservation">Reservations</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/user/payment">Payment history</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/user/cart">My Cart</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/user/review">Add review</Link>
    </li>
    <li className=" uppercase">
      <Link to="/dashboard/user/booking">my bookings</Link>
    </li>
  </>
);

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-mobile">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? adminDashboard : userDashboard}
          <div className=" border-b-4 border-cyan-600"></div>
          <li className=" uppercase">
            <Link to="/dashboard/reservation">home</Link>
          </li>
          <li className=" uppercase">
            <Link to="/dashboard/reservation">menu</Link>
          </li>
          <li className=" uppercase">
            <Link to="/dashboard/reservation">shop</Link>
          </li>
          <li className=" uppercase">
            <Link to="/dashboard/reservation">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
