import React, { useState } from "react";
import Logo from '../../assets/logo.svg';

import { Container, Content, FormContainer, ProfileContainer } from './styles';
import MusicianForm from "./components/MusicianForm";
import ListenerForm from "./components/ListenerForm";

const Register = () => {

    const [profile, setProfile] = useState('musician');

    function handleProfile(e) {
        setProfile(e.target.value);
    }

    return (
        <>
            <Container>
                <Content>
                    <FormContainer>
                        <img src={Logo}></img>
                        <h2>Criar uma nova conta</h2>

                        <ProfileContainer>
                            <label htmlFor='profile'>Qual o seu perfil?</label>
                            <select
                                name='profile'
                                id='profile'
                                className='styled-input'
                                value={profile}
                                onChange={handleProfile}
                            >
                                <option value='musician'>Músico</option>
                                <option value='listener'>Ouvinte</option>
                            </select>
                        </ProfileContainer>
                        
                        {
                            profile === 'musician' ?
                                <MusicianForm />
                                :
                                <ListenerForm />
                        }
                    </FormContainer>
                </Content>
            </Container>
        </>
    )
}

export default Register;