import { createContext, useEffect, useState } from "react";
import { getProfileRequest, userRequest } from "../../services/api";

export const UserContext = createContext({});

<<<<<<< HEAD
export const UserProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const isTokenOnStorage = () => {
    const token = localStorage.getItem("@onflow:token");
    const userdata = localStorage.getItem("@onflow:user");
    if (token === null || userdata === null) {
      return false;
    }
    return true;
  };

  const isTokenExistent = isTokenOnStorage() === true;

  useEffect(() => {
    if (!isTokenExistent) {
      return;
    }
    setIsFetching(true);

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
  }, [isTokenExistent]);

  return (
    <UserContext.Provider value={{ isTokenExistent, isFetching, userInfo, setIsFetching, setUserInfo }}>{children}</UserContext.Provider>
  );
};
=======
export const UserProvider = ({children}) => {
    return (
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}
>>>>>>> cbe42ece44bc5fd2b3b934034713a81b35b6cd2c
