import { useContext } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { loginRequest } from "../../services/api";
import { UserContext } from "../UserContext";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const { setIsFetching } = useContext(UserContext);

  const handleLogin = async (data) => {
    try {
      setIsFetching(true);
      const response = await loginRequest(data);

      localStorage.clear();
      localStorage.setItem("@onflow:token", response.data.accessToken);
      localStorage.setItem("@onflow:user", JSON.stringify(response.data.user));
      localStorage.setItem("@onflow:id", response.data.user.id);

      toast.success("Login bem-sucedido.");
      setIsFetching(false);
      return true;
    } catch (error) {
      if (error?.response.data) {
        toast.error(error.response.data, {
          position: "top-right",
        });
      } else {
        console.error(error);
        toast.error("Houve um erro ao realizar o login.");
      }
      setIsFetching(false);
      return false;
    }
  };

  return <LoginContext.Provider value={{ handleLogin }}>{children}</LoginContext.Provider>;
};
