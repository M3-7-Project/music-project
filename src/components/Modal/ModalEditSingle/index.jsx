import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiCloseCircleFill } from "react-icons/ri";
import * as yup from "yup";
import toast from "react-hot-toast";
import Logo from "../../../assets/logoRedonda.svg";
import ModalExample from "..";
import { updateProductionRequest } from "../../../services/api";
import { productsContext } from "../../../contexts/ProductsContext";
import { useContext } from "react";
import {
  ButtonCriar,
  ButtonDelete,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { ModalContext } from "../../../contexts/ModalContext";

const EditSingle = ({ id }) => {
  const { setIsEditSingle, infosEditSingle } = useContext(ModalContext);
  const { productToken, parseDate } = useContext(productsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    date: yup.string().required("Data é obrigatório"),
    bio: yup.string().required("Bio é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const request = async (data) => {
    await updateProductionRequest(
      infosEditSingle,
      {
        ...data,
        date: parseDate(data.date),
      },
      productToken()
    )
      .then((res) => {
        console.log(res.data);
        toast.success("Single editado com sucesso");
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
          <ButtonModal onClick={() => setIsEditSingle(false)}>
            <RiCloseCircleFill size={23} />
          </ButtonModal>
        </div>
        <TitleModal>Editar Single</TitleModal>
        <FormModal onSubmit={handleSubmit(request)}>
          <InputModal type="text" placeholder="Nome" {...register("name")} />
          <SpanModal>{errors.name?.message}</SpanModal>
          <InputModal type="date" {...register("date")} />
          <SpanModal>{errors.date?.message}</SpanModal>
          <InputModal type="text" placeholder="Bio" {...register("bio")} />
          <SpanModal>{errors.bio?.message}</SpanModal>
          <div>
            <ButtonCriar type="submit">Editar</ButtonCriar>
            <ButtonDelete>Excluir</ButtonDelete>
          </div>
        </FormModal>
      </div>
    </ModalExample>
  );
};

export default EditSingle;
