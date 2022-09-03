import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { createProfileRequest, registerRequest } from '../../../../services/api';
import { LoadingModal } from '../../styles';

import { Button, MusicianFormStyles } from "./styles";

const MusicianForm = ({setIsLoading}) => {

    const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        artistic_name: yup.string().required('Nome artístico obrigatório'),
        bio: yup.string().required('Nome artístico obrigatório'),
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: yup.string().required('Senha obrigatória'),
        confirmPassword: yup.string().required('Digite sua senha novamente').equals([yup.ref('password'), null], 'A senha não corresponde'),
        instagram: yup.string().optional(),
        facebook: yup.string().optional(),
        twitter: yup.string().optional(),
        youtube: yup.string().optional(),
        profile_picture: yup.string().optional(),
        genre: yup.array().required('Estilo musical obrigatório'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ( data ) => {
        const registerRequestObj = createRegisterRequestObj(data);
        registerRequest(registerRequestObj)
            .then((res) => {
                const{user: {id}, accessToken} = {...res.data}
                const profileRequestObj = createProfileRequestObj(data, id);
                createProfileRequest(profileRequestObj, accessToken)
                    .then((res) => {
                        handleSuccesToast()
                    })
                    .catch((err) => {
                        handleFailToast();
                    })
            })
            .catch((err) => {
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
        const{name, artistic_name, bio, genre, profile_picture, instagram, facebook, twitter, youtube } = {...data};
        return {
            userId: userId,
            name: name,
            artistic_name: artistic_name,
            type: 'producer',
            contact: '',
            description: bio,
            genre: genre,
            profile_picture: profile_picture,
            social_media: {
                instagram: instagram,
                facebook: facebook,
                twitter: twitter,
                youtube: youtube,
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
                <input type="text" id="name" className="styled-input" placeholder="Nome" {...register('name')} />
                <span>{errors.name?.message}</span>

                <input type="text" id="artistic-name" className="styled-input" placeholder="Nome artístico" {...register('artistic_name')} />
                <span>{errors.artistic_name?.message}</span>

                <textarea type="text" id="bio" className="styled-input" placeholder="Bio" {...register('bio')} />
                <span>{errors.bio?.message}</span>

                <input type="text" id="email" className="styled-input" placeholder="E-mail" {...register('email')} />
                <span>{errors.email?.message}</span>

                <input type="password" id="password" className="styled-input" placeholder="Senha" {...register('password')} />
                <span>{errors.password?.message}</span>

                <input type="password" id="confirm-password" className="styled-input" placeholder="Confirme sua senha" {...register('confirmPassword')} />
                <span>{errors.confirmPassword?.message}</span>

                <input type="text" id="instagram" className="styled-input" placeholder="Instagram" {...register('instagram')} />
                <span></span>

                <input type="text" id="facebook" className="styled-input" placeholder="Página do facebook" {...register('facebook')} />
                <span></span>

                <input type="text" id="twitter" className="styled-input" placeholder="Twitter" {...register('twitter')} />
                <span></span>

                <input type="text" id="youtube" className="styled-input" placeholder="YouTube" {...register('youtube')} />
                <span></span>

                <input type="text" id="profile_picture" className="styled-input" placeholder="Foto de perfil" {...register('profile_picture')} />
                <span></span>

                <h4>Selecione seus estilos musicais</h4>

                <select multiple id='multi-select' className='styled-input' {...register('genre')} >
                    <option value="rock">Rock</option>
                    <option value="sertanejo">Sertenejo</option>
                    <option value="pagode">Pagode</option>
                    <option value="axe">Axé</option>
                    <option value="mpb">MPB</option>
                </select>
                <span>{errors.genre?.message}</span>

                <Button>Cadastrar</Button>

                <a>Já possui conta?</a>

            </MusicianFormStyles>
        </>
    );
}

export default MusicianForm;