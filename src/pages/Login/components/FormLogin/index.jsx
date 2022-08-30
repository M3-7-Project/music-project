import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormStyled } from "./styles";

const FormLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const requestLogin = (data) => {
    console.log(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(requestLogin)}>
      <input
        type="text"
        id="email"
        placeholder="E-mail"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>
      <input
        type="password"
        id="password"
        placeholder="Senha"
        {...register("password")}
      />
      <span>{errors.password?.message}</span>
      <button type="submit">Login</button>
    </FormStyled>
  );
};

export default FormLogin;
