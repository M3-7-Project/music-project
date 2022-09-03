import { LoginStyled } from "./styles";
import FormLogin from "./components/FormLogin";
import Logo from "../../assets/Subtract.svg";

const Login = () => {
  return (
    <LoginStyled>
      <section className="loginFormSection">
        <div>
          <img src={Logo} alt="" />
          <h2>Tenha acesso a essa experiência!</h2>
          <FormLogin />
          <a>Ainda não possui conta?</a>
        </div>
      </section>
    </LoginStyled>
  );
};

export default Login;
