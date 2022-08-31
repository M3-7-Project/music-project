import { useState } from "react";
import ModalExample from "../Modal";
import { IoMdCloseCircle } from "react-icons/Io";
import Logo from "../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonDelete,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";

const EditSingle = () => {
  const [isEditSingle, setIsEdit] = useState(false);

  return (
    <div>
      <button onClick={() => setIsEdit(true)}>Modal Editar Single</button>
      {isEditSingle && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsEdit(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar Single</TitleModal>
            <FormModal>
              <InputModal type="text" placeholder="Nome" />
              <SpanModal>erro</SpanModal>
              <InputModal type="date" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Bio" />
              <SpanModal>erro</SpanModal>
              <div>
                <ButtonCriar>Editar</ButtonCriar>
                <ButtonDelete>Excluir</ButtonDelete>
              </div>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default EditSingle;
