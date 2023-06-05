import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utils/hooks/useAuth";
import useCheckAdmin from "../utils/hooks/useCheckAdmin";

const AdminRoute = ({ children }) => {
  const { isAdmin, isAdminLoading } = useCheckAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div>Loadiing ......</div>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
