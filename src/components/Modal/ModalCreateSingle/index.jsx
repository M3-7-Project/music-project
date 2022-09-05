import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Logo from "../../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import ModalExample from "..";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createProductionRequest } from "../../../services/api";
import { useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import toast from "react-hot-toast";

const ModalSingle = () => {
  const [isSingle, setIsSingle] = useState(false);
  const { parseDate, productToken, productTokenId, productProfile } =
    useContext(productsContext);

  const schema = yup.object().shape({
    preview: yup.string().required("Música é obrigatório"),
    name: yup.string().required("Nome é obrigatório"),
    date: yup.string().required("Data é obrigatório"),
    bio: yup.string().required("Bio é obrigatório"),
    cover: yup.string().required("Imagem é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const request = async (data) => {
    await createProductionRequest(
      {
        ...data,
        userId: productTokenId(),
        profileId: productProfile(),
        date: parseDate(data.date),
        type: "single",
      },
      productToken()
    )
    .then(res => {
      console.log(res.data)
      toast.success("Single criado com sucesso!")
    })
    .catch(err => {
      console.log(err)
      toast.error("Ocorreu um erro")
    })
  };

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
            <FormModal onSubmit={handleSubmit(request)}>
              <InputModal
                type="text"
                placeholder="Música"
                {...register("preview")}
              />
              <SpanModal>{errors.preview?.message}</SpanModal>
              <InputModal
                type="text"
                placeholder="Nome"
                {...register("name")}
              />
              <SpanModal>{errors.name?.message}</SpanModal>
              <InputModal type="date" {...register("date")} />
              <SpanModal>{errors.date?.message}</SpanModal>
              <InputModal type="text" placeholder="Bio" {...register("bio")} />
              <SpanModal>{errors.bio?.message}</SpanModal>
              <InputModal
                type="text"
                placeholder="Imagem de capa"
                {...register("cover")}
              />
              <SpanModal>{errors.cover?.message}</SpanModal>
              <ButtonCriar type="submit">Criar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default ModalSingle;
