import ModalAlbum from "../../components/ModalCreateAlbum";
import CreateMusic from "../../components/ModalCreateMusic";
import ModalSingle from "../../components/ModalCreateSingle";
import DeleteMusic from "../../components/ModalDeleteMusic";
import EditAlbum from "../../components/ModalEditAlbum";
import EditProducer from "../../components/ModalEditProducer";
import EditProfile from "../../components/ModalEditProfile";
import EditSingle from "../../components/ModalEditSingle";

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
