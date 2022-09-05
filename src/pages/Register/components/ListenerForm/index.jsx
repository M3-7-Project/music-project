import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { createProfileRequest, registerRequest } from '../../../../services/api';

import { Button, MusicianFormStyles } from '../MusicianForm/styles';

const ListenerForm = ({setIsLoading}) => {

    const navigate = useNavigate();

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
        setIsLoading(true);
        const registerRequestObj = createRegisterRequestObj(data);
        registerRequest(registerRequestObj)
            .then((res) => {
                const{user: {id}, accessToken} = {...res.data}
                const profileRequestObj = createProfileRequestObj(data, id);
                createProfileRequest(profileRequestObj, accessToken)
                    .then((res) => {
                        setIsLoading(false);
                        handleSuccesToast();
                        navigate('/login');
                    })
                    .catch((err) => {
                        setIsLoading(false);
                        handleFailToast();
                    })
            })
            .catch((err) => {
                setIsLoading(false);
                handleFailToast();
            })
    }

    function createRegisterRequestObj(data) {
        const{email, password} = {...data};
        return {
            email: email,
            password: password
        };
    }

    function createProfileRequestObj(data, userId) {
        const {name,profile_picture } = {...data};
        return {
            userId: userId,
            name: name,
            artistic_name: '',
            type: 'user',
            contact: '',
            description: '',
            genre: '',
            profile_picture: profile_picture,
            social_media: {
                instagram: '',
                facebook: '',
                twitter: '',
                youtube: '',
            }
        };
    }

    function handleSuccesToast() {
        toast.success('Cadastro feito com sucesso!');
    }

    function handleFailToast() {
        toast.error('Oops! Algo deu errado');
    }

    return (
        <>
            <MusicianFormStyles onSubmit={handleSubmit(onSubmit)}>
                <input type='text' id='name' className='styled-input' placeholder='Nome' {...register('name')} />
                <span>{errors.name?.message}</span>

                <input type='text' id='email' className='styled-input' placeholder='E-mail' {...register('email')} />
                <span>{errors.email?.message}</span>

                <input type='password' id='password' className='styled-input' placeholder='Senha' {...register('password')} />
                <span>{errors.password?.message}</span>

                <input type='password' id='confirm-password' className='styled-input' placeholder='Confirme sua senha' {...register('confirmPassword')} />
                <span>{errors.confirmPassword?.message}</span>

                <input type='text' id='image' className='styled-input' placeholder='Foto de perfil' {...register('image')} />
                <span></span>

                <Button>Cadastrar</Button>

                <Link to='/login'>Já possui conta?</Link>

            </MusicianFormStyles>
        </>
    );
}

export default ListenerForm;