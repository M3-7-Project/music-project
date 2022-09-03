import { useState } from "react";
import ModalExample from "..";
import { IoMdCloseCircle } from "react-icons/Io";
import Logo from "../../../assets/logoRedonda.svg";
import { ButtonDelete, ButtonModal } from "../ComponentsModal/styles";
import {
  getProductionRequest,
  updateProductionRequest,
} from "../../../services/api";
import { useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import toast from "react-hot-toast";

const DeleteMusic = ({ id, name }) => {
  const [isDelete, setIsDelete] = useState(false);
  const { productToken } = useContext(productsContext);

  const request = async () => {
    const musics = await getProductionRequest(id).then(
      (res) => res.data.musics
    );

    await updateProductionRequest(
      id,
      {
        musics: musics.filter((elem) => elem != name),
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
    <div>
      <button onClick={() => setIsDelete(true)}>Modal Excluir Música</button>
      {isDelete && (
        <ModalExample>
          <div>
            <div>
              <img src={Logo} alt="" />
              <ButtonModal onClick={() => setIsDelete(false)}>
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
      )}
    </div>
  );
};

export default DeleteMusic;