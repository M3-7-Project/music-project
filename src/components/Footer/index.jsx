import {Player, Img, Button, MusicTimer, Constrols} from './styles'
import CircleButton from '../CircleButton/index'
import Imagem from '../../assets/imgLogin.jpg'
import { BsFillPlayFill , BsHeart, BsSkipBackwardFill, BsSkipForwardFill, BsPauseFill} from "react-icons/bs";
import { useContext } from 'react';
import { MusicContext } from '../../contexts/UserContext/MusicContext';


const Footer = () => {

    const {audioElemt, play, isPlaying, currentMusic, onPlaying} = useContext(MusicContext)

    return (
        <Player>
            <Img src={Imagem} alt=''></Img>
            <div>
                <h4>Nome da música</h4>
                <audio src={currentMusic} ref={audioElemt} onTimeUpdate={onPlaying}></audio>
                <MusicTimer>
                    
                </MusicTimer>
                <Constrols>
                    <Button>
                        <BsSkipBackwardFill color='var(--grey-03)' size={24}/>
                    </Button>
                    <CircleButton radius={50} onClick={play}>
                        {
                            isPlaying ? (
                                <BsPauseFill color='var(--grey-03)' size={30}/>
                            ) : (
                                <BsFillPlayFill color='var(--grey-03)' size={30}/>
                            )
                        }  
                    </CircleButton>
                    <Button>
                        <BsSkipForwardFill color='var(--grey-03)' size={24}/>
                    </Button>
                </Constrols>
            </div>
            <CircleButton radius={50}>
                <BsHeart color='var(--grey-03)' size={24}/>
            </CircleButton>
        </Player>
    )
}

export default Footer;