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
  const { productToken, parseDate } = useContext(productsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    date: yup.string().required("Data é obrigatório"),
    bio: yup.string().required("Bio é obrigatório"),
    image: yup.string().required("Imagem é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const request = async (data) => {
    console.log(infosEditAlbum)
    await updateProductionRequest(
      infosEditAlbum,
      {
        ...data,
        date: parseDate(data.date),
      },
      productToken()
    )
      .then((res) => {
        console.log(res.data);
        toast.success("Álbum editado com sucesso!");
        setIsEditAlbum(false)
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
          <div>
            <ButtonCriar type="submit">Editar</ButtonCriar>
            <ButtonDelete>Excluir</ButtonDelete>
           </div>
         </FormModal>
      </div>
    </ModalExample>
  );
};

export default EditAlbum;
