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

const EditSingle = () => {
  const { setIsEditSingle, infosEditSingle } = useContext(ModalContext);
  const { productToken, parseDate, setAlbum } = useContext(productsContext);

  const schema = yup.object().shape({
    name: yup.string().optional("Nome é obrigatório"),
    date: yup.string().optional("Data é obrigatório"),
    bio: yup.string().optional("Bio é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const request = async (data) => {
    if (data.name === "") {
      delete data.name;
    }
    if (data.date === "") {
      delete data.date;
    } else {
      data = { ...data, date: parseDate(data.date) };
    }
    if (data.bio === "") {
      delete data.bio;
    }
    if (Object.keys(data).length === 0) {
      toast.error("Preencha pelo menos um campo!");
    } else {
      await updateProductionRequest(infosEditSingle, data, productToken())
        .then((res) => {
          toast.success("Single editado com sucesso");
          setAlbum(res.data);
          setIsEditSingle(false);
        })
        .catch((err) => {
          toast.error("Ocorreu um erro");
        });
    }
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
          <ButtonCriar type="submit">Editar</ButtonCriar>
        </FormModal>
      </div>
    </ModalExample>
  );
};

export default EditSingle;
