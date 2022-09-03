import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getProfileRequest, userRequest } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const isTokenOnStorage = () => {
    const token = localStorage.getItem("@onflow:token");
    const userdata = localStorage.getItem("@onflow:user");
    if (token === null || userdata === null) {
      return false;
    }
    return true;
  };

  const isTokenExistent = isTokenOnStorage();

  useEffect(() => {
    if (!isTokenExistent) {
      setIsFetching(false);
      return;
    }

    const userData = localStorage.getItem("@onflow:user");
    const { id } = JSON.parse(userData);

    const fetchUser = async (id) => {
      const token = localStorage.getItem("@onflow:token");
      try {
        await userRequest(token, id);
        const response = await getProfileRequest("", { userId: id });
        setUserInfo(response.data[0]);
        setIsFetching(false);
      } catch (error) {
        localStorage.clear();
        setIsFetching(false);
      }
    };

    fetchUser(id);
  }, []);

  return <UserContext.Provider value={{ isTokenExistent, isFetching, userInfo }}>{children}</UserContext.Provider>;
};
