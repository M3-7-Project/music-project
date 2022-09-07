import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import AnimationDiv from "../ComponentsModal";
import ModalAlbum from "../ModalCreateAlbum";
import CreateMusic from "../ModalCreateMusic";
import ModalSingle from "../ModalCreateSingle";
import DeleteMusic from "../ModalDeleteMusic";
import DeleteProduct from "../ModalDeleteProduct";
import EditAlbum from "../ModalEditAlbum";
import EditProducer from "../ModalEditProducer";
import EditProfile from "../ModalEditProfile";
import EditSingle from "../ModalEditSingle";

const GeneralModal = () => {
  const {
    isCreateAlbum,
    isEditAlbum,
    isCreateSingle,
    isEditSingle,
    isAddMusic,
    isDeleteMusic,
    isEditProfile,
    isEditProducer,
    isDeleteProduct,
  } = useContext(ModalContext);
  const {} = useContext(ModalContext);

  return (
    <AnimatePresence>
      {isCreateAlbum && (
        <AnimationDiv>
          <ModalAlbum />
        </AnimationDiv>
      )}
      {isEditAlbum && (
        <AnimationDiv>
          <EditAlbum />
        </AnimationDiv>
      )}
      {isCreateSingle && (
        <AnimationDiv>
          <ModalSingle />
        </AnimationDiv>
      )}
      {isEditSingle && (
        <AnimationDiv>
          <EditSingle />
        </AnimationDiv>
      )}
      {isAddMusic && (
        <AnimationDiv>
          <CreateMusic />
        </AnimationDiv>
      )}
      {isDeleteMusic && (
        <AnimationDiv>
          <DeleteMusic />
        </AnimationDiv>
      )}
      {isEditProfile && (
        <AnimationDiv>
          <EditProfile />
        </AnimationDiv>
      )}
      {isEditProducer && (
        <AnimationDiv>
          <EditProducer />
        </AnimationDiv>
      )}
      {isDeleteProduct && (
        <AnimationDiv>
          <DeleteProduct />
        </AnimationDiv>
      )}
    </AnimatePresence>
  );
};

export default GeneralModal;
