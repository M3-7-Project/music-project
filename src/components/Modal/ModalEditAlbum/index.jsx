import { RiCloseCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import * as yup from "yup";
import toast from "react-hot-toast";
import Logo from "../../../assets/logoRedonda.svg";
import ModalExample from "..";
import { updateProductionRequest } from "../../../services/api";
import { productsContext } from "../../../contexts/ProductsContext";
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

const EditAlbum = () => {
  const { setIsEditAlbum, infosEditAlbum } = useContext(ModalContext);
  const { productToken, parseDate, setAlbum } = useContext(productsContext);

  const schema = yup.object().shape({
    name: yup.string().optional("Nome é obrigatório"),
    date: yup.string().optional("Data é obrigatório"),
    bio: yup.string().optional("Bio é obrigatório"),
    image: yup.string().optional("Imagem é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const request = async (data) => {
    console.log(data);
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
    if (data.image === "") {
      delete data.image;
    }
    if (Object.keys(data).length === 0) {
      toast.error("Preencha pelo menos um campo!");
    } else {
      await updateProductionRequest(infosEditAlbum, data, productToken())
        .then((res) => {
          toast.success("Álbum editado com sucesso!");
          setAlbum(res.data);
          setIsEditAlbum(false);
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
          <ButtonModal onClick={() => setIsEditAlbum(false)}>
            <RiCloseCircleFill size={23} />
          </ButtonModal>
        </div>
        <TitleModal>Editar Álbum</TitleModal>
        <FormModal onSubmit={handleSubmit(request)}>
          <InputModal type="text" placeholder="Nome" {...register("name")} />
          <SpanModal>{errors.name?.message}</SpanModal>
          <InputModal type="date" {...register("date")} />
          <SpanModal>{errors.date?.message}</SpanModal>
          <InputModal type="text" placeholder="Bio" {...register("bio")} />
          <SpanModal>{errors.bio?.message}</SpanModal>
          <InputModal
            type="text"
            placeholder="Imagem de capa"
            {...register("image")}
          />
          <SpanModal>{errors.image?.message}</SpanModal>
          <ButtonCriar type="submit">Editar</ButtonCriar>
        </FormModal>
      </div>
    </ModalExample>
  );
};

export default EditAlbum;
