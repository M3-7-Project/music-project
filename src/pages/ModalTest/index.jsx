import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const ModalTest = () => {
  const { setIsCreateSingle } = useContext(ModalContext);
  return (
    <>
      <button onClick={() => setIsCreateSingle(true)}>teste</button>
    </>
  );
};

export default ModalTest;
