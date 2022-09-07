import { useContext } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ModalExample from "..";
import Logo from "../../../assets/logoRedonda.svg";
import { verification } from "./verification";
import { productsContext } from "../../../contexts/ProductsContext";
import { updateProfileRequest } from "../../../services/api";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { ProducerContext } from "../../../contexts/ProducerContext";

const EditProducer = () => {
  const { setIsEditProducer } = useContext(ModalContext);
  const { getInfos, productProfile, productToken } =
    useContext(productsContext);
  const { setUserInfo, userInfo } = useContext(UserContext);
  const { setProducer, producer } = useContext(ProducerContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const request = async (data) => {
    const infos = await getInfos();
    const newData = await verification(data, infos);
    if (Object.keys(newData).length === 0) {
      toast.error("Preencha pelo menos um campo");
    } else {
      await updateProfileRequest(
        await productProfile(),
        newData,
        productToken()
      )
        .then((res) => {
          toast.success("Perfil atualizado com sucesso");
          setIsEditProducer(false);
          setUserInfo({
            ...userInfo,
            artistic_name: res.data.artistic_name,
            profile_picture: res.data.profile_picture,
          });
          setProducer({
            ...producer,
            artistic_name: res.data.artistic_name,
            profile_picture: res.data.profile_picture,
          });
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
          <ButtonModal onClick={() => setIsEditProducer(false)}>
            <RiCloseCircleFill size={23} />
          </ButtonModal>
        </div>
        <TitleModal>Editar perfil</TitleModal>
        <FormModal onSubmit={handleSubmit(request)}>
          <InputModal type="text" placeholder="Nome" {...register("name")} />
          <SpanModal></SpanModal>
          <InputModal
            type="text"
            placeholder="Nome artístico"
            {...register("artistic_name")}
          />
          <SpanModal></SpanModal>
          <InputModal type="text" placeholder="Bio" {...register("bio")} />
          <SpanModal></SpanModal>
          <InputModal
            type="text"
            placeholder="Instagram"
            {...register("instagram")}
          />
          <SpanModal></SpanModal>
          <InputModal
            type="text"
            placeholder="Página do facebook"
            {...register("facebook")}
          />
          <SpanModal></SpanModal>
          <InputModal
            type="text"
            placeholder="Twitter"
            {...register("twitter")}
          />
          <SpanModal></SpanModal>
          <InputModal
            type="text"
            placeholder="YouTube"
            {...register("youtube")}
          />
          <SpanModal></SpanModal>
          <InputModal
            type="text"
            placeholder="Foto do perfil"
            {...register("profile_picture")}
          />
          <SpanModal></SpanModal>
          <select
            multiple
            id="multi-select"
            className="styled-input"
            {...register("genre")}
          >
            <option value="rock">Rock</option>
            <option value="sertanejo">Sertenejo</option>
            <option value="pagode">Pagode</option>
            <option value="axe">Axé</option>
            <option value="mpb">MPB</option>
          </select>
          <ButtonCriar>Editar</ButtonCriar>
        </FormModal>
      </div>
    </ModalExample>
  );
};

export default EditProducer;
