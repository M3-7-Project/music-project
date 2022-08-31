import {ModalStyled } from "./styles";

const ModalExample = ({children }) => {
  return (
        <ModalStyled>
          <div>
            <div>{children}</div>
          </div>
        </ModalStyled>
  );
};

export default ModalExample;
