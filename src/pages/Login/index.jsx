<<<<<<< HEAD
import { LoginStyled } from "./styles";
import FormLogin from "./components/FormLogin";
import Logo from "../../assets/Subtract.svg";
import { Link } from "react-router-dom";
import TransitionPage from "../../components/TransitionPage";

const Login = () => {
  return (
    <TransitionPage>
      <LoginStyled>
        <section className="loginFormSection">
          <div>
            <img src={Logo} alt="" />
            <h2>Tenha acesso a essa experiência!</h2>
            <FormLogin />
            <Link to="/register">Ainda não possui conta?</Link>
          </div>
        </section>
      </LoginStyled>
    </TransitionPage>
  );
};
=======
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import { } from './styles';

const Login = () => {
>>>>>>> cbe42ece44bc5fd2b3b934034713a81b35b6cd2c

    const schema = yup.object().shape({
        /* 
        MODELO DE SHAPE

        example: yup.string().required('Exemplo obrigatório'), 
        */
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <>
            {/*
            MODELO DE FORM

            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <label htmlFor="example">Exemplo</label>
                <input 
                    type="text"
                    id="example"
                    {...register('example')}
                />
                <span>{errors.example?.message}</span>
            </form>
            */}
        </>
    )
}

export default Login;