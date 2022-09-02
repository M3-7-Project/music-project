import {Player, Img, Button, MusicNavigate, MusicBar, MusicTimer, Constrols} from './styles'
import CircleButton from '../CircleButton/index'
import Imagem from '../../assets/loginImage.jpg'
import { BsFillPlayFill , BsHeart, BsSkipBackwardFill, BsSkipForwardFill, BsPauseFill} from "react-icons/bs";
import { useContext } from 'react';
import { MusicContext } from '../../contexts/UserContext/MusicContext';


const Footer = () => {

    const {audioElemt, play, isPlaying, currentMusic, onPlaying, progress, changeTime, musicTime, skipBack, skipNext} = useContext(MusicContext)

    return (
        <Player>
            <Img src={Imagem} alt=''></Img>
            <div>
                <h4>Nome da música</h4>
                <audio src={currentMusic} ref={audioElemt} onTimeUpdate={onPlaying} ></audio>
                <MusicTimer>
                    <MusicNavigate onClick={changeTime} ref={musicTime}>
                        <MusicBar width={progress.progress || 0}/>
                    </MusicNavigate>
                </MusicTimer>
                <Constrols>
                    <Button onClick={skipBack}>
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
                    <Button onClick={skipNext}>
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