import React from "react";
import { BaloonsContainer, MainContainer, TextContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import BackImg from "../../../../assets/landingPage-backimg.svg";

const MainContent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register", { replace: true });
  };

  return (
    <MainContainer>
      <TextContainer>
        <h1>Venha fazer parte dessa experiência!</h1>
        <p>
          Cada álbum, cada música, cada acorde tem uma história dentro dele. Seus esforços de promoção devem dizer isso. Promover sua
          própria música pode parecer agressivo ou complicado. Contar sua história torna-a mais pessoal e envolvente.
        </p>

        <p>
          O seu público está sempre esperando algo novo, que supere qualquer expectativa e seja uma novidade de mercado. Estar presente nas
          redes através de divulgações do seu futuro trabalho faz com que as pessoas curtam, comentem e compartilhem com amigos e
          familiares, disseminando e ampliando a visualização do seu material.
        </p>
      </TextContainer>
      <img src={BackImg}></img>
      <BaloonsContainer>
        <div>
          <p>Já ajudamos a fazer mais de 5k lançamentos musicais</p>
        </div>
        <div>
          <p>São mais de 50K usuários ativos na plataforma</p>
        </div>
        <div>
          <p>Plataforma nᵒ 1 em lançamentos de álbuns e singles</p>
        </div>
        <button onClick={() => handleNavigate()}>
          <p>Cadastre-se agora</p>
        </button>
      </BaloonsContainer>
    </MainContainer>
  );
};

export default MainContent;
