import { useState } from "react";
import ModalExample from "../Modal";
import { IoMdCloseCircle } from "react-icons/Io";
import Logo from "../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";

const CreateMusic = () => {
  const [isMusic, setIsMusic] = useState(false);

  return (
    <div>
      <button onClick={() => setIsMusic(true)}>Modal Adicionar Música</button>
      {isMusic && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsMusic(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Adicionar música</TitleModal>
            <FormModal>
              <InputModal type="text" placeholder="Nome" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Música" />
              <SpanModal>erro</SpanModal>
              <ButtonCriar>Criar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default CreateMusic;
