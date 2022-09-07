import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownContext } from "../../contexts/DropdownContext";
import { AnchorDiv, Dropdown } from "./styles";

const HeaderDropdown = () => {
  const navigate = useNavigate();
  const { useOnClickOutside, setShowMenu } = useContext(DropdownContext);

  const handleProfile = () => {
    navigate("/producer/:id");
  };

  const handleHomepage = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setShowMenu(false));

  return (
    <>
      <Dropdown ref={menuRef}>
        <img src="../src/assets/logo.svg" />
        <AnchorDiv>
          <a onClick={() => handleProfile()}>Perfil</a>
          <a onClick={() => handleHomepage()}>Home</a>
          <a onClick={() => handleLogout()}>Logout</a>
        </AnchorDiv>
      </Dropdown>
    </>
  );
};

export default HeaderDropdown;
