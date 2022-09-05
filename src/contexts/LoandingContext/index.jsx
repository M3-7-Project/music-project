import { createContext, useState } from "react";

export const LoadingContext = createContext({});

export const LoadingProvider = ({ children }) => {
  const [isLoanding, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoanding, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
