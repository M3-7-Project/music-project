import { getProfileRequest } from "../../services/api";
import {} from "./styles";

const Landing = () => {
  const doReq = async () => {
    const retorno = await getProfileRequest(undefined, "name=Marcos");
    console.log("~ retorno", retorno);
  };

  return (
    <>
      <button onClick={() => doReq()}>requisição</button>
    </>
  );
};

export default Landing;
