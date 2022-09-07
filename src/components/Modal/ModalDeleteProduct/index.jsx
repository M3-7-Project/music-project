import { useContext } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import ModalExample from "..";
import { ModalContext } from "../../../contexts/ModalContext";
import { productsContext } from "../../../contexts/ProductsContext";
import { deleteProductionRequest } from "../../../services/api";
import { ButtonDelete, ButtonModal } from "../ComponentsModal/styles";
import Logo from "../../../assets/logoRedonda.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DeleteProduct = () => {
  const { productToken } = useContext(productsContext);
  const { setIsDeleteProduct, infosDeleteProduct } =
    useContext(ModalContext);
    const navigate = useNavigate()

    const request = async () => {
        await deleteProductionRequest(infosDeleteProduct.id, productToken())
        .then(res => {
            navigate("/dashboard")
            setIsDeleteProduct(false)
            toast.success("Produção apagada com sucesso!")
        })
        .catch(err => {
            toast.error("Ocorreu um erro")
        })
    }

  return (
    <ModalExample>
      <div>
        <div>
          <img src={Logo} alt="" />
          <ButtonModal onClick={() => setIsDeleteProduct(false)}>
            <RiCloseCircleFill size={23} />
          </ButtonModal>
        </div>
        <section>
          <h2>Você deseja mesmo excluir esta produção?</h2>
          <h3>{infosDeleteProduct.name}</h3>
          <ButtonDelete onClick={request}>Excluir</ButtonDelete>
        </section>
      </div>
    </ModalExample>
  );
};

export default DeleteProduct;
