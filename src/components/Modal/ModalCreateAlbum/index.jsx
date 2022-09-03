import { useContext, useState } from "react";
import { IoMdCloseCircle } from "react-icons/Io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ModalExample from "..";
import toast from "react-hot-toast";
import Logo from "../../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { createProductionRequest } from "../../../services/api";
import { productsContext } from "../../../contexts/ProductsContext";

const ModalAlbum = () => {
  const [isAlbum, setIsAlbum] = useState(false);
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
        type: "album",
        musics: [],
      },
      productToken()
    )
      .then((res) => {
        console.log(res);
        toast.success("Álbum criado com sucesso!");
      })
      .catch(() => toast.error("Ocorreu um erro"));
  };

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
              <InputModal type="date" name="" id="" {...register("date")} />
              <SpanModal>{errors.date?.message}</SpanModal>
              <InputModal type="text" placeholder="Bio" {...register("bio")} />
              <SpanModal>{errors.bio?.message}</SpanModal>
              <InputModal
                type="text"
                placeholder="Imagem"
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

export default ModalAlbum;
