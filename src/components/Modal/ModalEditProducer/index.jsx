import { useState } from "react";
import ModalExample from "..";
import Logo from "../../../assets/logoRedonda.svg";
import { IoMdCloseCircle } from "react-icons/Io";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";
import Select from "react-select";
import { useForm } from "react-hook-form";

const EditProducer = () => {
  const [isProducer, setIsProducer] = useState(false);

  const options = [
    { value: "teste1", label: "teste1" },
    { value: "teste2", label: "teste2" },
    { value: "teste3", label: "teste3" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const request = (data) => {
    let newData = {}
    Object.keys(data).forEach(item => {
      if(!data[item] === ""){
        newData = {...newData, item: data[item]}
      }
      // console.log(item + " " + data[item])
    }
    )
    console.log(newData)
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
                <IoMdCloseCircle size={23} />
              </ButtonModal>
            </div>
            <TitleModal>Editar perfil</TitleModal>
            <FormModal onSubmit={handleSubmit(request)}>
              <InputModal type="text" placeholder="Nome" {...register("name")}/>
              <SpanModal></SpanModal>
              <InputModal type="text" placeholder="Nome artístico" {...register("artistic_name")}/>
              <SpanModal></SpanModal>
              <InputModal type="text" placeholder="Bio" {...register("bio")}/>
              <SpanModal></SpanModal>
              <InputModal type="text" placeholder="Instagram" {...register("instagram")}/>
              <SpanModal></SpanModal>
              <InputModal type="text" placeholder="Página do facebook" {...register("facebook")}/>
              <SpanModal></SpanModal>
              <InputModal type="text" placeholder="Twitter" {...register("twitter")}/>
              <SpanModal></SpanModal>
              <InputModal type="text" placeholder="YouTube" {...register("youtube")}/>
              <SpanModal></SpanModal>
              <InputModal type="text" placeholder="Foto do perfil" {...register("profile_picture")}/>
              <SpanModal></SpanModal>
              <Select
                options={options}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
              <ButtonCriar>Editar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default EditProducer;