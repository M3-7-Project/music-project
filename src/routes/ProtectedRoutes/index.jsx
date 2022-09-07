import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { isTokenExistent, isFetching } = useContext(UserContext);

  if (!isTokenExistent) {
    return <Navigate to="/login" />;
  }

  if (!isFetching) {
    return <Outlet />;
  }
};

export default ProtectedRoutes;
