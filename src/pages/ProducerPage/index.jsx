import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import CircleButton from '../../components/CircleButton'
import {Cover, DropDown, Header, HeaderButton, HeaderContent, HeaderImage, Line, Triangle} from './styles';
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import cover from '../../assets/cover.png'

const ProducerPage = () => {
    const {userInfo} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const [animation, setAnimation] = useState('close')

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
           
        </>
    )
}

export default ProducerPage;