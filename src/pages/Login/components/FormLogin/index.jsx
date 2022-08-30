import { useForm } from "react-hook-form";
import { FormStyled } from "./styles";

const FormLogin = () => {

  return (
    <FormStyled>
      <input type="text" id="email" placeholder="E-mail" />
      <input type="password" id="password" placeholder="Senha" />
      <button>Login</button>
    </FormStyled>
  );
};

export default FormLogin;
