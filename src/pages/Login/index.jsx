import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import { } from './styles';

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