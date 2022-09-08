import { LoginStyled } from "./styles";
import FormLogin from "./components/FormLogin";
import Logo from "../../assets/Subtract.svg";
import { Link } from "react-router-dom";
import TransitionPage from "../../components/TransitionPage";

const Login = () => {
  return (
    <TransitionPage>
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
    </TransitionPage>
  );
};

export default Login;
