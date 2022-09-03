import { createContext } from "react";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const isTokenOnStorage = () => {
    const token = localStorage.getItem("@onflow:token");
    if (token === null) {
      return false;
    }
    return true;
  };

  return (
    <userContext.Provider value={{ isTokenOnStorage }}>
      {children}
    </userContext.Provider>
  );
};
