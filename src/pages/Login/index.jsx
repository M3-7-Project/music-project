import { LoginStyled } from "./styles";
import FormLogin from "./components/FormLogin";
import Logo from "../../assets/Subtract.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginStyled>
      <section className="loginFormSection">
        <div>
          <img src={Logo} alt="" />
          <h2>Tenha acesso a essa experiência!</h2>
          <FormLogin />
          <Link to="/register">Ainda não possui conta?</Link>
        </div>
      </section>
    </LoginStyled>
  );
};

export default Login;
