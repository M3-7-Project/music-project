import { useNavigate } from "react-router-dom";
import { FallbackStyled } from "./styles";

const FallBack = () => {
  const navigate = useNavigate();

  return (
    <FallbackStyled>
      <div class="container">
        <p class="glitch">
          <span aria-hidden="true">Error 404</span>
          Error 404
          <span aria-hidden="true">Error 404</span>
        </p>
      </div>
      <div>
        <h2>Página não encontrada :( <span onClick={() => navigate("/dashboard")} className="error">Volte a Dashboard</span></h2>
      </div>
    </FallbackStyled>
  );
};

export default FallBack;
