import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import { Button, MusicianFormStyles } from "./styles";

const ListenerForm = () => {

    const options = [
        { value: 'rock', label: 'Rock' },
        { value: 'sertanejo', label: 'Sertanejo' },
        { value: 'pagode', label: 'Pagode' },
        { value: 'axe', label: 'Axé' },
        { value: 'mpb', label: 'MPB' },
    ];

    const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: yup.string().required('Senha obrigatória'),
        confirmPassword: yup.string().required('Digite sua senha novamente').equals([yup.ref('password'), null], 'A senha não corresponde'),
        image: yup.string().optional(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ( data ) => {
        console.log(data);
    }

    return (
        <MusicianFormStyles onSubmit={handleSubmit(onSubmit)}>
            <input type="text" id="name" className="styled-input" placeholder="Nome" {...register('name')} />
            <span>{errors.name?.message}</span>

            <input type="text" id="email" className="styled-input" placeholder="E-mail" {...register('email')} />
            <span>{errors.email?.message}</span>

            <input type="password" id="password" className="styled-input" placeholder="Senha" {...register('password')} />
            <span>{errors.password?.message}</span>

            <input type="password" id="confirm-password" className="styled-input" placeholder="Confirme sua senha" {...register('confirmPassword')} />
            <span>{errors.confirmPassword?.message}</span>

            <input type="text" id="image" className="styled-input" placeholder="Foto de perfil" {...register('image')} />
            <span></span>

            <Button>Cadastrar</Button>

            <a>Já possui conta?</a>

        </MusicianFormStyles>
    );
}

export default ListenerForm;