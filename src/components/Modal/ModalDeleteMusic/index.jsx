import { useState } from "react";
import ModalExample from "..";
import { IoMdCloseCircle } from "react-icons/io";
import Logo from "../../../assets/logoRedonda.svg";
import { ButtonDelete, ButtonModal } from "../ComponentsModal/styles";
import {
  getProductionRequest,
  updateProductionRequest,
} from "../../../services/api";
import { useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import toast from "react-hot-toast";
import { ModalContext } from "../../../contexts/ModalContext";

const DeleteMusic = () => {
  const { SetIsDeleteMusic, infosDeleteMusic } = useContext(ModalContext);
  const { productToken } = useContext(productsContext);

  const request = async () => {
    const musics = await getProductionRequest(infosDeleteMusic.idAlbum).then(
      (res) => res.data.musics
    );

    await updateProductionRequest(
      id,
      {
        musics: musics.filter((elem) => elem != infosDeleteMusic.idMusic),
      },
      productToken()
    )
      .then((res) => {
        console.log(res.data);
        toast.success("Música deletada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ocorreu um erro");
      });
  };

  return (
    <ModalExample>
      <div>
        <div>
          <img src={Logo} alt="" />
          <ButtonModal onClick={() => SetIsDeleteMusic(false)}>
            <IoMdCloseCircle size={23} />
          </ButtonModal>
        </div>
        <section>
          <h2>Você deseja mesmo excluir esta música?</h2>
          <h3>Nome da música aqui...</h3>
          <ButtonDelete onClick={request}>Excluir</ButtonDelete>
        </section>
      </div>
    </ModalExample>
  );
};

export default DeleteMusic;
