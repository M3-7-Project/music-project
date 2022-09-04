import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormStyled } from "./styles";
import Button from "../../../../components/Button";
import { useContext } from "react";
import { LoginContext } from "../../../../contexts/LoginContext";

const FormLogin = () => {
  const { handleLogin } = useContext(LoginContext);

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Insira um email válido."),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const doLogin = (data) => {
    handleLogin(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(doLogin)}>
      <input type="text" id="email" placeholder="E-mail" {...register("email")} />
      <span>{errors.email?.message}</span>
      <input type="password" id="password" placeholder="Senha" {...register("password")} />
      <span>{errors.password?.message}</span>
      <Button type="submit" content="Login" />
    </FormStyled>
  );
};

export default FormLogin;
