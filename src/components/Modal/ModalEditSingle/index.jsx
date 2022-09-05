import { useState } from "react";
import ModalExample from "..";
import { IoMdCloseCircle } from "react-icons/io";
import Logo from "../../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonDelete,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateProductionRequest } from "../../../services/api";
import { useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import toast from "react-hot-toast";

const EditSingle = ({ id }) => {
  const [isEditSingle, setIsEdit] = useState(false);
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
      id,
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
            <FormModal onSubmit={handleSubmit(request)}>
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
              <div>
                <ButtonCriar type="submit">Editar</ButtonCriar>
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
