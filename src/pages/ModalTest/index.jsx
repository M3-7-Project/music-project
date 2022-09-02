import ModalAlbum from "../../components/Modal/ModalCreateAlbum";
import CreateMusic from "../../components/Modal/ModalCreateMusic";
import ModalSingle from "../../components/Modal/ModalCreateSingle";
import DeleteMusic from "../../components/Modal/ModalDeleteMusic";
import EditAlbum from "../../components/Modal/ModalEditAlbum";
import EditProducer from "../../components/Modal/ModalEditProducer";
import EditProfile from "../../components/Modal/ModalEditProfile";
import EditSingle from "../../components/Modal/ModalEditSingle";

const ModalTest = () => {
  return (
    <>
      <ModalAlbum />
      <ModalSingle />
      <EditSingle/>
      <EditAlbum/>
      <CreateMusic/>
      <DeleteMusic/>
      <EditProfile/>
      <EditProducer/>
    </>
  );
};

export default ModalTest;
