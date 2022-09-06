import { useContext } from "react";
import ModalAlbum from "../../components/Modal/ModalCreateAlbum";
import CreateMusic from "../../components/Modal/ModalCreateMusic";
import ModalSingle from "../../components/Modal/ModalCreateSingle";
import DeleteMusic from "../../components/Modal/ModalDeleteMusic";
import EditAlbum from "../../components/Modal/ModalEditAlbum";
import EditProducer from "../../components/Modal/ModalEditProducer";
import EditProfile from "../../components/Modal/ModalEditProfile";
import EditSingle from "../../components/Modal/ModalEditSingle";
import { ModalContext } from "../../contexts/ModalContext";

const ModalTest = () => {
  const { setIsCreateSingle } = useContext(ModalContext);
  return (
    <>
      <button onClick={() => setIsCreateSingle(true)}>teste</button>
    </>
  );
};

export default ModalTest;
