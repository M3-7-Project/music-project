import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormStyled } from "./styles";
import Button from "../../../../components/Button";
import { useContext } from "react";
import { LoginContext } from "../../../../contexts/LoginContext";
import { LoadingContext } from "../../../../contexts/LoandingContext";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../../../services/api";
import toast from "react-hot-toast";

const FormLogin = () => {
  const { setIsLoading, isLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

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

  const doLogin = async (data) => {
    setIsLoading(true);
    try {
      const response = await loginRequest(data);

      localStorage.clear();
      localStorage.setItem("@onflow:token", response.data.accessToken);
      localStorage.setItem("@onflow:user", JSON.stringify(response.data.user));
      localStorage.setItem("@onflow:id", response.data.user.id);

      navigate("/dashboard", { replace: true });
      toast.success("Login bem-sucedido.");
      setIsLoading(false);
    } catch (error) {
      if (error?.response.data) {
        toast.error(error.response.data, {
          position: "top-right",
        });
      } else {
        console.error(error);
        toast.error("Houve um erro ao realizar o login.");
      }
      setIsLoading(false);
    }
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
