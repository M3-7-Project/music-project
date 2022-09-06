import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import CircleButton from '../../components/CircleButton';
import Footer from '../../components/Footer'
import {Cover, DropDown, Header, HeaderButton, HeaderContent, HeaderImage, Line, Main, Triangle, Bio, Contact} from './styles';
import { AiOutlineMenu, AiOutlinePlus, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import cover from '../../assets/cover.png'
import LaunchCard from './LaunchCard';

const ProducerPage = () => {
    const {userInfo} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const [animation, setAnimation] = useState('close')

    console.log(userInfo)

    const onpenDropDown = () => {
        if(animation == 'open'){
            setAnimation('close')
        } else {
            setAnimation('open')
        }
    }

    useEffect(() => {
        if(animation== 'open'){
            setIsOpen(true)
        } else {
            setAnimation('close')
            setTimeout(() => {
                setIsOpen(false)
            }, 800)
        } 
    }, [animation])

    return (
        <>
            <Header>
                <Cover src={cover}/>
                <HeaderImage>
                    <CircleButton radius={60}>
                        <AiOutlineMenu size={25} color='var(--grey-03)'/>
                    </CircleButton>
                    <img src={userInfo.profile_picture}></img>
                </HeaderImage>
                <HeaderContent>
                    <h1>{userInfo.artistic_name}</h1>
                    <h4>{userInfo.genre.join(' | ')}</h4>
                </HeaderContent>
                <HeaderButton>
                    {
                        isOpen && <DropDown animation={animation}>
                        <button>Editar Perfil</button>
                        <Line></Line>
                        <button>Criar Single</button>
                        <Line></Line>
                        <button>Criar Álbum</button>
                        <Triangle/>
                    </DropDown>
                    }                    
                    <CircleButton radius={60} onClick={onpenDropDown}>
                        <AiOutlinePlus size={30} color='var(--grey-03)'/>
                    </CircleButton>
                </HeaderButton>
            </Header>
            <Main>
                <Bio>
                    <p>{userInfo.description}</p>
                    <Contact>
                        <p>Acompanhe Também nossas redes sociais:</p>
                        <div>
                            <a href={userInfo.social_media[1]} target='_blank'>
                            <AiFillInstagram size={45} color='var(--grey-03)'/>
                            </a>
                            <a href={userInfo.social_media[0]} target='_blank'>
                            <BsFacebook size={38} color='var(--grey-03)'/>                                
                            </a>
                            <a href={userInfo.social_media[2]} target='_blank'>
                            <BsTwitter size={40} color='var(--grey-03)'/>   
                            </a>
                            <a href={userInfo.social_media[3]} target='_blank'>
                            <BsYoutube size={40} color='var(--grey-03)'/>
                            </a>
                        </div>
                    </Contact>
                </Bio>
                <LaunchCard/>
            </Main>
            <Footer/>
        </>
    )
}

export default ProducerPage;