import { useState } from "react";
import ModalExample from "..";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ModalAlbum = () => {
  const [isAlbum, setIsAlbum] = useState(false);

  const schema = yup.object().shape({
    music: yup.string().required("Música é obrigatório"),
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
    console.log(data)
  }

  return (
    <div>
      <button onClick={() => setIsAlbum(true)}>Modal Álbum</button>
      {isAlbum && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsAlbum(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Criar Álbum</TitleModal>
            <FormModal onSubmit={handleSubmit(request)}>
              <InputModal type="text" placeholder="Música" {...register("music")}/>
              <SpanModal>{errors.music?.message}</SpanModal>
              <InputModal type="text" placeholder="Nome" {...register("name")}/>
              <SpanModal>{errors.name?.message}</SpanModal>
              <InputModal type="date" name="" id="" {...register("date")}/>
              <SpanModal>{errors.date?.message}</SpanModal>
              <InputModal type="text" placeholder="Bio" {...register("bio")}/>
              <SpanModal>{errors.bio?.message}</SpanModal>
              <InputModal type="text" placeholder="Imagem" {...register("image")}/>
              <SpanModal>{errors.image?.message}</SpanModal>
              <ButtonCriar type="submit">Criar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default ModalAlbum;
