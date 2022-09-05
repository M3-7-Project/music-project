import { useState } from "react";
import ModalExample from "..";
import Logo from "../../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import { getProfileRequest, updateProfileRequest } from "../../../services/api";
import { useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import toast from "react-hot-toast";
import { useEffect } from "react";

const EditProfile = () => {
  const [isProfile, setIsProfile] = useState(false);
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
    <div>
      <button onClick={() => setIsProfile(true)}>Modal Editar Perfil</button>
      {isProfile && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsProfile(false)}>
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar Perfil</TitleModal>
            <FormModal onSubmit={handleSubmit(request)}>
              <InputModal
                type="text"
                placeholder="Nome"
                {...register("name")}
              />
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
      )}
    </div>
  );
};

export default EditProfile;
