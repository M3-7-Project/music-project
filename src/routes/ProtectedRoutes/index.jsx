import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { isTokenOnStorage } = useContext(userContext);

  const isToken = isTokenOnStorage();

  if (!isToken) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
