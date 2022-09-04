import { FooterContainer, FooterSection } from "./styles"
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <img src="../src/assets/header-logo.svg"/>
          <p>Nos acompanhe também em nossas outras redes sociais:</p>
          <div>
            <AiFillInstagram size={'2em'}/>
            <BsFacebook size={'2em'}/>
            <BsTwitter size={'2em'}/>
            <BsYoutube size={'2em'}/>
          </div>
        </FooterContainer>
      </FooterSection>
    </>
  )
}

export default Footer