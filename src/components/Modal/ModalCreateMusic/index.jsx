import ModalExample from "..";
import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ModalExample from "..";
import * as yup from "yup";
import { useContext } from "react";
import toast from "react-hot-toast";
import Logo from "../../../assets/logoRedonda.svg";
import { productsContext } from "../../../contexts/ProductsContext";
import {
  getProductionRequest,
  updateProductionRequest,
} from "../../../services/api";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import {
  getProductionRequest,
  updateProductionRequest,
} from "../../../services/api";
import { ModalContext } from "../../../contexts/ModalContext";

const CreateMusic = () => {
  const { setIsAddMusic, infosAddMusic } = useContext(ModalContext);
  const { productToken } = useContext(productsContext);

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

  const request = async (data) => {
    const musics = await getProductionRequest(infosAddMusic).then(
      (res) => res.data.musics
    );

    await updateProductionRequest(
      id,
      {
        musics: [...musics, data.name],
      },
      productToken()
    )
      .then((res) => {
        console.log(res);
        toast.success("Música adiconada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ocorreu um erro");
      });
  };

  return (
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
          <InputModal type="text" placeholder="Nome" {...register("name")} />
          <SpanModal>{errors.name?.message}</SpanModal>
          <ButtonCriar type="submit">Criar</ButtonCriar>
        </FormModal>
      </div>
    </ModalExample>
  );
};

export default CreateMusic;
