import { useState } from "react";
import ModalExample from "../Modal";
import { IoMdCloseCircle } from "react-icons/Io";
import Logo from "../../assets/logoRedonda.svg";
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

const EditAlbum = () => {
  const [isEditAlbum, setEditAlbum] = useState(false);

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

  const request = (data) => {
    console.log(data);
  };

  return (
    <div>
      <button onClick={() => setEditAlbum(true)}>Modal editar Album</button>
      {isEditAlbum && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setEditAlbum(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar Álbum</TitleModal>
            <FormModal onSubmit={handleSubmit(request)}>
              <InputModal type="text" placeholder="Nome" {...register("name")}/>
              <SpanModal>{errors.name?.message}</SpanModal>
              <InputModal type="date" {...register("date")}/>
              <SpanModal>{errors.date?.message}</SpanModal>
              <InputModal type="text" placeholder="Bio" {...register("bio")}/>
              <SpanModal>{errors.bio?.message}</SpanModal>
              <InputModal type="text" placeholder="Imagem de capa" {...register("image")}/>
              <SpanModal>{errors.image?.message}</SpanModal>
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

export default EditAlbum;
