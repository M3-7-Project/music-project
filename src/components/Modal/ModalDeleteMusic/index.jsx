import { RiCloseCircleFill } from "react-icons/ri";
import { useContext } from "react";
import toast from "react-hot-toast";
import ModalExample from "..";
import Logo from "../../../assets/logoRedonda.svg";
import { productsContext } from "../../../contexts/ProductsContext";
import { ButtonDelete, ButtonModal } from "../ComponentsModal/styles";
import {
  getProductionRequest,
  updateProductionRequest,
} from "../../../services/api";
import { ModalContext } from "../../../contexts/ModalContext";

const DeleteMusic = () => {
  const { SetIsDeleteMusic, infosDeleteMusic } = useContext(ModalContext);
  const { productToken, album, setAlbum } = useContext(productsContext);

  const request = async () => {
    const musics = await getProductionRequest(infosDeleteMusic.idAlbum).then(
      (res) => res.data.musics
    );

    await updateProductionRequest(
      infosDeleteMusic.idAlbum,
      {
        musics: musics.filter(
          (elem, index) => index != infosDeleteMusic.idMusic && elem
        ),
      },
      productToken()
    )
      .then((res) => {
        toast.success("Música deletada com sucesso!");
        setAlbum({
          ...album,
          musics: album.musics.filter(
            (elem, index) => index != infosDeleteMusic.idMusic && elem
          ),
        });
        SetIsDeleteMusic(false);
      })
      .catch((err) => {
        toast.error("Ocorreu um erro");
      });
  };

  return (
    <ModalExample>
      <div>
        <div>
          <img src={Logo} alt="" />
          <ButtonModal onClick={() => SetIsDeleteMusic(false)}>
            <RiCloseCircleFill size={23} />
          </ButtonModal>
        </div>
        <section>
          <h2>Você deseja mesmo excluir esta música?</h2>
          <h3>{infosDeleteMusic.name}</h3>
          <ButtonDelete onClick={request}>Excluir</ButtonDelete>
        </section>
      </div>
    </ModalExample>
  );
};

export default DeleteMusic;
