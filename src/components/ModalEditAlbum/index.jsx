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

const EditAlbum = () => {
  const [isEditAlbum, setEditAlbum] = useState(false);

  return (
    <div>
      <button onClick={() => setEditAlbum(true)}>Modal editar Album</button>
      {isEditAlbum && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setEditAlbum(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar Álbum</TitleModal>
            <FormModal>
              <InputModal type="text" placeholder="Nome" />
              <SpanModal>erro</SpanModal>
              <InputModal type="date" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Bio" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Imagem de capa" />
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

export default EditAlbum;
