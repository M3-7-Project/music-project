import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import { Button, MusicianFormStyles } from "./styles";

const MusicianForm = () => {

    const options = [
        { value: 'rock', label: 'Rock' },
        { value: 'sertanejo', label: 'Sertanejo' },
        { value: 'pagode', label: 'Pagode' },
        { value: 'axe', label: 'Axé' },
        { value: 'mpb', label: 'MPB' },
    ];

    const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        artisticName: yup.string().required('Nome artístico obrigatório'),
        bio: yup.string().required('Nome artístico obrigatório'),
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: yup.string().required('Senha obrigatória'),
        confirmPassword: yup.string().required('Digite sua senha novamente').equals([yup.ref('password'), null], 'A senha não corresponde'),
        instagram: yup.string().optional(),
        facebook: yup.string().optional(),
        twitter: yup.string().optional(),
        youtube: yup.string().optional(),
        image: yup.string().optional(),
        musicalStyles: yup.array().required('Estilo musical obrigatório'),
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

            <input type="text" id="artistic-name" className="styled-input" placeholder="Nome artístico" {...register('artisticName')} />
            <span>{errors.artisticName?.message}</span>

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

            <input type="text" id="image" className="styled-input" placeholder="Foto de perfil" {...register('image')} />
            <span></span>

            <h4>Selecione seus estilos musicais</h4>

            <select multiple id='multi-select' className='styled-input' {...register('musicalStyles')} >
                <option value="rock">Rock</option>
                <option value="sertanejo">Sertenejo</option>
                <option value="pagode">Pagode</option>
                <option value="axe">Axé</option>
                <option value="mpb">MPB</option>
            </select>
            <span>{errors.musicalStyles?.message}</span>

            <Button>Cadastrar</Button>

            <a>Já possui conta?</a>

        </MusicianFormStyles>
    );
}

export default MusicianForm;