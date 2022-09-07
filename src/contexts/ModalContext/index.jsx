import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [isCreateAlbum, setIsCreateAlbum] = useState(false);
  const [isEditAlbum, setIsEditAlbum] = useState(false);
  const [isCreateSingle, setIsCreateSingle] = useState(false);
  const [isEditSingle, setIsEditSingle] = useState(false);
  const [isAddMusic, setIsAddMusic] = useState(false);
  const [isDeleteMusic, SetIsDeleteMusic] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEditProducer, setIsEditProducer] = useState(false);
  const [isDeleteProduct, setIsDeleteProduct] = useState(false);
  const [infosEditAlbum, setInfosEditAlbum] = useState(0);
  const [infosEditSingle, setInfosEditSingle] = useState("");
  const [infosAddMusic, setInfosAddMusic] = useState("");
  const [infosDeleteMusic, setInfosDeleteMusic] = useState({});
  const [infosDeleteProduct, setInfosDeleteProduct] = useState({});

  const openEditAlbum = (id) => {
    setIsEditAlbum(true);
    setInfosEditAlbum(id);
    console.log(id);
  };

  const openEditSingle = (id) => {
    setIsEditSingle(true);
    setInfosEditSingle(id);
  };

  const openAddMusic = (id) => {
    setIsAddMusic(true);
    setInfosAddMusic(id);
  };

  const openDeleteMusic = (idAlbum, idMusic, name) => {
    SetIsDeleteMusic(true);
    setInfosDeleteMusic({ idAlbum, idMusic, name });
  };

  const openDeleteProduct = (name, id) => {
    setIsDeleteProduct(true);
    setInfosDeleteProduct({ name, id });
  };

  return (
    <ModalContext.Provider
      value={{
        isCreateAlbum,
        setIsCreateAlbum,
        isEditAlbum,
        setIsEditAlbum,
        isCreateSingle,
        setIsCreateSingle,
        isEditSingle,
        setIsEditSingle,
        isAddMusic,
        setIsAddMusic,
        isDeleteMusic,
        SetIsDeleteMusic,
        isEditProfile,
        setIsEditProfile,
        isEditProducer,
        setIsEditProducer,
        infosEditAlbum,
        infosEditSingle,
        infosAddMusic,
        infosDeleteMusic,
        openEditAlbum,
        openEditSingle,
        openAddMusic,
        openDeleteMusic,
        isDeleteProduct,
        setIsDeleteProduct,
        infosDeleteProduct,
        openDeleteProduct,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
