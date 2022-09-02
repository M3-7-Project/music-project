import { useState } from "react";
import ModalExample from "..";
import { IoMdCloseCircle } from "react-icons/Io";
import Logo from "../../../assets/logoRedonda.svg";
import {
  ButtonDelete,
  ButtonModal,
  TitleModal,
} from "../ComponentsModal/styles";

const DeleteMusic = () => {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDelete(true)}>Modal Excluir Música</button>
      {isDelete && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsDelete(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <section>
              <h2>Você deseja mesmo excluir esta música?</h2>
              <h3>Nome da música aqui...</h3>
              <ButtonDelete>Excluir</ButtonDelete>
            </section>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default DeleteMusic;
