import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import { LoginStyled } from './styles';
import FormLogin from "./components/FormLogin";

const Login = () => {

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
        <LoginStyled>
            <FormLogin/>
        </LoginStyled>
    )
}

export default Login;