<<<<<<< HEAD
import React, { useState } from "react";
import Logo from "../../assets/logo.svg";

import {
  Container,
  Content,
  FormContainer,
  LoadingModal,
  ProfileContainer,
} from "./styles";
import MusicianForm from "./components/MusicianForm";
import ListenerForm from "./components/ListenerForm";
import TransitionPage from "../../components/TransitionPage";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState("musician");

  function handleProfile(e) {
    setProfile(e.target.value);
  }

  return (
    <>
      <TransitionPage>
        {isLoading && <LoadingModal>Carregando...</LoadingModal>}
        <Container>
          <Content>
            <FormContainer>
              <img src={Logo}></img>
              <h2>Criar uma nova conta</h2>

              <ProfileContainer>
                <label htmlFor="profile">Qual o seu perfil?</label>
                <select
                  name="profile"
                  id="profile"
                  className="styled-input"
                  value={profile}
                  onChange={handleProfile}
                >
                  <option value="musician">Músico</option>
                  <option value="listener">Ouvinte</option>
                </select>
              </ProfileContainer>

              {profile === "musician" ? (
                <MusicianForm setIsLoading={setIsLoading} />
              ) : (
                <ListenerForm setIsLoading={setIsLoading} />
              )}
            </FormContainer>
          </Content>
        </Container>
      </TransitionPage>
    </>
  );
};
=======
import {} from './styles';

const Register = () => {
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
>>>>>>> cbe42ece44bc5fd2b3b934034713a81b35b6cd2c

export default Register;
