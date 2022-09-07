import { ModalStyled } from "./styles";

const ModalExample = ({ children }) => {
  return (
    <ModalStyled
      initial={{ opacity: 0, y: 60, scale: 0.5 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      <div>{children}</div>
    </ModalStyled>
  );
};

export default ModalExample;
