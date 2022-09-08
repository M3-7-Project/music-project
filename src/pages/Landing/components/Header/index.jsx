import { HeaderContainer, HeaderSection } from "./styles";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../../../assets/header-logo.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleRedirect = (destiny) => {
    navigate(`/${destiny}`, { replace: true });
  };

  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <img src={Logo} />
          <div>
            <a onClick={() => handleRedirect("register")}>Cadastro</a>
            <a onClick={() => handleRedirect("login")}>Login</a>
          </div>
        </HeaderContainer>
      </HeaderSection>
    </>
  );
};

export default Header;
