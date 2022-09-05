import { useContext, useState } from "react";
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

const EditProducer = () => {
  const [isProducer, setIsProducer] = useState(false);
  const { getInfos, productProfile, productToken } =
    useContext(productsContext);

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
          console.log(res);
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
      <button onClick={() => setIsProducer(true)}>Modal Editar Producer</button>
      {isProducer && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsProducer(false)}>
                <RiCloseCircleFill size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar perfil</TitleModal>
            <FormModal onSubmit={handleSubmit(request)}>
              <InputModal
                type="text"
                placeholder="Nome"
                {...register("name")}
              />
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
      )}
    </div>
  );
};

export default EditProducer;
