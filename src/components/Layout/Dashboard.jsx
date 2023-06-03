import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
          <li>
            <Link to="/dashboard/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/cart">My Cart</Link>
          </li>
          <li>
            <Link to="/dashboard/payment">Payment History</Link>
          </li>
          <li>
            <Link to="/dashboard/reservation">Reservations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
