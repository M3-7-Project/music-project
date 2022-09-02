import { useState } from "react";
import ModalExample from "..";
import Logo from "../../../assets/logoRedonda.svg";
import { IoMdCloseCircle } from "react-icons/io";
import { ButtonCriar, ButtonModal, FormModal, InputModal, SpanModal, TitleModal } from "../ComponentsModal/styles";
import Select from "react-select";

const EditProducer = () => {
  const [isProducer, setIsProducer] = useState(false);

  const options = [
    { value: "teste1", label: "teste1" },
    { value: "teste2", label: "teste2" },
    { value: "teste3", label: "teste3" },
  ];

  return (
    <div>
      <button onClick={() => setIsProducer(true)}>Modal Editar Producer</button>
      {isProducer && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsProducer(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar perfil</TitleModal>
            <FormModal>
              <InputModal type="text" placeholder="Nome" />
              <SpanModal>error</SpanModal>
              <InputModal type="text" placeholder="Nome artístico" />
              <SpanModal>error</SpanModal>
              <InputModal type="text" placeholder="Bio" />
              <SpanModal>error</SpanModal>
              <InputModal type="text" placeholder="Instagram" />
              <InputModal type="text" placeholder="Página do facebook" />
              <InputModal type="text" placeholder="Twitter" />
              <InputModal type="text" placeholder="YouTube" />
              <InputModal type="text" placeholder="Foto do perfil" />
              <SpanModal>error</SpanModal>
              <Select options={options} isMulti className="basic-multi-select" classNamePrefix="select" />
              <ButtonCriar>Editar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default EditProducer;
