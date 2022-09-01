import { getProfileRequest } from "../../services/api";
import {} from "./styles";

const Landing = () => {
  //DELETAR ISSO AQUI, TESTES APENAS

  const doReq = async () => {
    const retorno = await getProfileRequest();
    console.log("~ retorno", retorno);
  };

  return (
    <>
      <button onClick={() => doReq()}>requisição</button>
    </>
  );
};

export default Landing;
