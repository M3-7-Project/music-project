import {useState } from "react";
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
import ModalExample from "../Modal";

const ModalSingle = () => {
  const [isSingle, setIsSingle] = useState(false);

  return (
    <div>
      <button onClick={() => setIsSingle(true)}>Modal Criar Single</button>
      {isSingle && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsSingle(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Criar Single</TitleModal>
            <FormModal>
              <InputModal type="text" placeholder="Música" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Nome" />
              <SpanModal>erro</SpanModal>
              <InputModal type="date" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Bio" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Imagem de copa" />
              <SpanModal>erro</SpanModal>
              <ButtonCriar>Criar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default ModalSingle;
