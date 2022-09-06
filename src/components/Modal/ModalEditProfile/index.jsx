import { useState } from "react";
import { useContext } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ModalExample from "..";
import Logo from "../../../assets/logoRedonda.svg";
import { getProfileRequest, updateProfileRequest } from "../../../services/api";
import { productsContext } from "../../../contexts/ProductsContext";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { ModalContext } from "../../../contexts/ModalContext";

const EditProfile = () => {
  const { setIsEditProfile } = useContext(ModalContext);
  const { productToken, productTokenId, productProfile } =
    useContext(productsContext);
  const [infos, setInfos] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getProfileRequest("", { userId: productTokenId() }).then((res) => {
      setInfos({
        name: res.data[0].name,
        profile_picture: res.data[0].profile_picture,
      });
    });
  }, []);

  const request = async (data) => {
    let newData = data;
    if (data.name === "" && data.profile_picture === "") {
      toast.error("Preencha pelo menos um dos campos!");
    } else {
      if (data.name === "") {
        newData = { ...newData, name: infos.name };
      } else if (data.profile_picture === "") {
        newData = { ...newData, profile_picture: infos.profile_picture };
      }
      await updateProfileRequest(
        await productProfile(),
        newData,
        productToken()
      )
        .then((res) => {
          console.log(res);
          setInfos(newData);
          toast.success("Perfil atualizado com sucesso");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Ocorreu um erro");
        });
    }
  };

  return (
    <ModalExample>
      <div>
        <div>
          <img src={Logo} alt="" />
          <ButtonModal onClick={() => setIsEditProfile(false)}>
            <IoMdCloseCircle size={23} />
          </ButtonModal>
        </div>
        <TitleModal>Editar Perfil</TitleModal>
        <FormModal onSubmit={handleSubmit(request)}>
          <InputModal type="text" placeholder="Nome" {...register("name")} />
          <SpanModal></SpanModal>
          <InputModal
            type="text"
            placeholder="Foto do perfil"
            {...register("profile_picture")}
          />
          <SpanModal></SpanModal>
          <ButtonCriar type="submit">Editar</ButtonCriar>
        </FormModal>
      </div>
    </ModalExample>
  );
};

export default EditProfile;
