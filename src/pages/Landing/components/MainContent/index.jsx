import React from 'react'
import { BaloonsContainer, MainContainer, TextContainer } from './styles'
import { useNavigate } from 'react-router-dom'

const MainContent = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/register', {replace: true})
  }

  return (
    <MainContainer>
      <TextContainer>
        <h1>Venha fazer parte dessa experiência!</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
      </TextContainer>
      <img src="../../src/assets/landingPage-backimg.svg"></img>
      <BaloonsContainer>
        <div>
          <p>Já ajudamos a fazer mais de 5k lançamentos musicais</p>
        </div>
        <div>
          <p>São mais de 50K usuários ativos na plataforma</p>
        </div>
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <button onClick={() => handleNavigate()}>
          <p>Cadastre-se agora</p>
        </button>
      </BaloonsContainer>
    </MainContainer>
  );
}

export default MainContent;