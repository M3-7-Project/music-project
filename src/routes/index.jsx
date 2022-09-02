import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/Landing";
import ProducerPage from "../pages/ProducerPage";
import Production from "../pages/Production";
import Dashboard from "../pages/Dashboard";
import { Navigate, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import ModalTest from "../pages/ModalTest";

const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/producer" element={<ProducerPage />}>
          <Route path=":id" element={<ProducerPage />} />
        </Route>
        <Route path="/album" element={<Production />}>
          <Route path=":id" element={<Production />} />
        </Route>
        <Route path="/music" element={<Production />}>
          <Route path=":id" element={<Production />} />
        </Route>
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/modal-test" element={<ModalTest />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesMain;
