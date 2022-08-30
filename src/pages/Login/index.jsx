import { LoginStyled } from "./styles";
import FormLogin from "./components/FormLogin";
import ImgLogin from "../../assets/imgLogin.jpg";
import Logo from "../../assets/Subtract.svg";

const Login = () => {
  return (
    <LoginStyled>
      <section>
        <div>
          <img src={Logo} alt="" />
          <h2>Tenha acesso a essa experiência...</h2>
          <FormLogin />
          <a>Ainda não possui conta?</a>
        </div>
        <div>
          <img src={ImgLogin} alt="Imagem de um show com pessoas" />
        </div>
      </section>
    </LoginStyled>
  );
};

export default Login;
