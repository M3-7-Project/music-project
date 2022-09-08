import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownContext } from "../../contexts/DropdownContext";
import { UserContext } from "../../contexts/UserContext";
import { AnchorDiv, Dropdown } from "./styles";
import { motion } from "framer-motion";
import { ProducerContext } from "../../contexts/ProducerContext";
import Logo from "../../assets/logo.svg";
import { ModalContext } from "../../contexts/ModalContext";

const HeaderDropdown = () => {
  const navigate = useNavigate();
  const { useOnClickOutside, setShowMenu } = useContext(DropdownContext);
  const { userInfo } = useContext(UserContext);
  const { setIdToSearch } = useContext(ProducerContext);
  const { setIsEditProfile } = useContext(ModalContext);

  const handleProfile = () => {
    if (userInfo.type !== "producer") {
      setIsEditProfile(true);
      return;
    }
    setIdToSearch(userInfo.id);
    navigate(`/producer/${userInfo.id}`);
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
    <motion.div
      initial={{ x: -200, opacity: 0, zIndex: 20, position: "absolute" }}
      animate={{ x: 0, opacity: 1, zIndex: 20 }}
      exit={{ x: -200, opacity: 0, zIndex: 20 }}
    >
      <Dropdown ref={menuRef}>
        <img src={Logo} />
        <AnchorDiv>
          <a onClick={() => handleProfile()}>Perfil</a>
          <a onClick={() => handleHomepage()}>Home</a>
          <a onClick={() => handleLogout()}>Logout</a>
        </AnchorDiv>
      </Dropdown>
    </motion.div>
  );
};

export default HeaderDropdown;
