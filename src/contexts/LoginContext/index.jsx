import { createContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/api";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await loginRequest(data);

      localStorage.clear();
      localStorage.setItem("@onflow:token", response.data.accessToken);
      localStorage.setItem("@onflow:user", JSON.stringify(response.data.user));

      navigate("/dashboard", { replace: true });
      toast.success("Login bem-sucedido.");
    } catch (error) {
      if (error?.response.data) {
        toast.error(error.response.data, {
          position: "top-right",
        });
      } else {
        console.error(error);
        toast.error("Houve um erro ao realizar o login.");
      }
    }
  };

  return <LoginContext.Provider value={{ handleLogin }}>{children}</LoginContext.Provider>;
};
