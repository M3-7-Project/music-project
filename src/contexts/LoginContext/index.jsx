import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { loginRequest } from "../../services/api";
import { LoadingContext } from "../LoandingContext";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const { setIsLoading, isLoanding } = useContext(LoadingContext);
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
};
