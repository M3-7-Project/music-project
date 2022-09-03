import { useState } from "react";
import ModalExample from "..";
import { IoMdCloseCircle } from "react-icons/Io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { getProductionRequest } from "../../../services/api";

const CreateMusic = ({id}) => {
  const [isMusic, setIsMusic] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const request = async (data, id) => {
    await getProductionRequest(3)
    .then(res => console.log(res))
    console.log(data);
  };

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
            <FormModal onSubmit={handleSubmit(request)}>
              <InputModal
                type="text"
                placeholder="Nome"
                {...register("name")}
              />
              <SpanModal>{errors.name?.message}</SpanModal>
              <ButtonCriar type="submit">Criar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default CreateMusic;
