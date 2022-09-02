import { useState } from "react";
import ModalExample from "../Modal";
import Logo from "../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { IoMdCloseCircle } from "react-icons/Io";

const EditProfile = () => {
  const [isProfile, setIsProfile] = useState(false);

  return (
    <div>
      <button onClick={() => setIsProfile(true)}>Modal Editar Perfil</button>
      {isProfile && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsProfile(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar Perfil</TitleModal>
            <FormModal>
              <InputModal type="text" placeholder="Nome" />
              <SpanModal>error</SpanModal>
              <InputModal type="text" placeholder="Foto do perfil" />
              <SpanModal>error</SpanModal>
              <ButtonCriar>Editar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default EditProfile;
