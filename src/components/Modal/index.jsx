import { ModalStyled } from "./styles";

const ModalExample = ({ children }) => {
  return (
    <ModalStyled>
      <div>{children}</div>
    </ModalStyled>
  );
};

export default ModalExample;
