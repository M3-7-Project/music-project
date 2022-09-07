import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { DropdownContext } from "../../contexts/DropdownContext";
import { StyledDropdownButton } from "./styles";

export const DropdownButton = () => {
  const { handleDropdownOpening } = useContext(DropdownContext);

  return (
    <StyledDropdownButton onClick={() => handleDropdownOpening()}>
      <BiMenu size={30} />
    </StyledDropdownButton>
  );
};
