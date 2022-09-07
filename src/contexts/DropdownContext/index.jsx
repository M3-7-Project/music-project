import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DropdownContext = createContext({});

export const DropdownProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDropdownOpening = () => {
    setShowMenu((prevState) => {
      return !prevState;
    });
  };

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const clickListener = (e) => {
        if (!ref.current || ref.current.contains(e.target)) {
          return;
        }
        handler(e);
      };

      document.addEventListener("mousedown", clickListener);
      document.addEventListener("touchstart", clickListener);
      return () => {
        document.removeEventListener("mousedown", clickListener);
        document.removeEventListener("touchstart", clickListener);
      };
    }, [ref, handler]);
  };

  return (
    <DropdownContext.Provider value={{ handleDropdownOpening, showMenu, setShowMenu, useOnClickOutside }}>
      {children}
    </DropdownContext.Provider>
  );
};
