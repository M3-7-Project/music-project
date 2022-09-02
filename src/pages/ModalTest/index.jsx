import ModalAlbum from "../../components/ModalCreateAlbum";
import CreateMusic from "../../components/ModalCreateMusic";
import ModalSingle from "../../components/ModalCreateSingle";
import DeleteMusic from "../../components/ModalDeleteMusic";
import EditAlbum from "../../components/ModalEditAlbum";
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
    </>
  );
};

export default ModalTest;