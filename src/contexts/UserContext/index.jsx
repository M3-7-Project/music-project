import { createContext, useEffect } from "react";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("@onflow:token");
  const userId = localStorage.getItem("@onflow:userId");
  const profileId = localStorage.getItem("@onflow:profileId");

  const parseDate = (data) => {
    const date = data.split("-");
    return Date.parse(new Date(date[0], date[1], date[2]));
  };

  return (
    <userContext.Provider value={{ token, userId, profileId, parseDate }}>
      {children}
    </userContext.Provider>
  );
};
