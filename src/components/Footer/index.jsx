import {Player, ContentPlayer, Img, Button, MusicNavigate, MusicBar, CircleNavigate, MusicTimer, TimerDiv, Constrols} from './styles'
import CircleButton from '../CircleButton/index'
import Imagem from '../../assets/loginImage.jpg'
import { BsFillPlayFill , BsHeart, BsSkipBackwardFill, BsSkipForwardFill, BsPauseFill} from "react-icons/bs";
import { useContext } from 'react';
import { MusicContext } from '../../contexts/MusicContext/Index';


const Footer = () => {

    const {audioElemt, play, isPlaying, currentMusic, onPlaying, progress, changeTime, musicTime, skipBack, skipNext, toMinute} = useContext(MusicContext)

    return (
        <Player>
            <Img src={Imagem} alt=''></Img>
            <ContentPlayer>
                <h4>Nome da música</h4>
                <audio src={currentMusic} ref={audioElemt} onTimeUpdate={onPlaying} ></audio>
                <MusicTimer>
                    <MusicNavigate onClick={changeTime} ref={musicTime}>
                        <MusicBar width={progress.progress || 0}/>
                        { progress.progress > 0 ? <CircleNavigate/> : <></>}
                    </MusicNavigate>
                    <TimerDiv>
                        <p>{toMinute( progress.time)}</p>
                        <p>{toMinute(progress.length)}</p>
                    </TimerDiv>
                </MusicTimer>
                <Constrols>
                    <Button onClick={skipBack}>
                        <BsSkipBackwardFill />
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
                        <BsSkipForwardFill/>
                    </Button>
                </Constrols>
            </ContentPlayer>
            <CircleButton radius={50}>
                <BsHeart color='var(--grey-03)' size={24}/>
            </CircleButton>
        </Player>
    )
}

export default Footer;