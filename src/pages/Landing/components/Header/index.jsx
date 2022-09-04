import { HeaderContainer, HeaderSection } from './styles'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleRedirect = (destiny) => {
        navigate(`/${destiny}`, {replace: true})
    }

    return (
        <>
            <HeaderSection>
                <HeaderContainer>
                    <img src="../src/assets/header-logo.svg"/>
                    <div>
                        <a onClick={() => handleRedirect('register')}>Cadastro</a>
                        <a onClick={() => handleRedirect('login')}>Login</a>
                    </div>
                </HeaderContainer>
            </HeaderSection>
        </>
    )
}

export default Header;