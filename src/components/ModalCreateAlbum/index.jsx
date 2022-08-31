import { useState } from "react";
import ModalExample from "../Modal";
import { IoMdCloseCircle } from "react-icons/Io";
import Logo from "../../assets/logoRedonda.svg";
import {
  ButtonCriar,
  ButtonModal,
  FormModal,
  InputModal,
  SpanModal,
  TitleModal,
} from "../ComponentsModal/styles";

// const [open, setOpen] = useState(false);

// const schema = yup.object().shape({});

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(schema),
// });

const ModalAlbum = () => {
  const [isAlbum, setIsAlbum] = useState(false);

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
            <FormModal>
              <InputModal type="text" placeholder="Música" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Nome" />
              <SpanModal>erro</SpanModal>
              <InputModal type="date" name="" id="" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Bio" />
              <SpanModal>erro</SpanModal>
              <InputModal type="text" placeholder="Imagem" />
              <SpanModal>erro</SpanModal>
              <ButtonCriar>Criar</ButtonCriar>
            </FormModal>
          </div>
        </ModalExample>
      )}
    </div>
  );
};

export default ModalAlbum;
