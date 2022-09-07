import {Player, ContentPlayer, Img, Button, MusicNavigate, MusicBar, CircleNavigate, MusicTimer, TimerDiv, Constrols} from './styles'
import CircleButton from '../CircleButton/index'
import { BsFillPlayFill , BsHeart, BsSkipBackwardFill, BsSkipForwardFill, BsPauseFill} from "react-icons/bs";
import { IoMdHeartDislike } from "react-icons/io";
import { useContext } from 'react';
import { MusicContext } from '../../contexts/MusicContext/Index';
import {UserContext} from '../../contexts/UserContext/index'
import { DashboardContext } from '../../contexts/DashboardContext';


const Footer = () => {

    const {audioElemt, play, isPlaying, currentMusic, onPlaying, progress, changeTime, musicTime, skipBack, skipNext, toMinute, likeSong} = useContext(MusicContext)
    const {userInfo} = useContext(UserContext)
    const {votedProductions, deleteVote} = useContext(DashboardContext)

    if(!currentMusic){
        return (
            <Player>
                <h3>Escolha sua primeira música ...</h3>    
            </Player>
        )
    }

    return (
        <Player>
            <Img src={currentMusic.cover} alt={currentMusic.name}></Img>
            <ContentPlayer>
                <h4>{currentMusic.name}</h4>
                <audio src={currentMusic.song} ref={audioElemt} onTimeUpdate={onPlaying} ></audio>
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
            {   currentMusic.isLiked ? (
                    <CircleButton radius={50} onClick={() => deleteVote(currentMusic.prductionId)}>
                        <IoMdHeartDislike color='var(--grey-03)' size={24}/>
                    </CircleButton>
                ) : (
                    <CircleButton radius={50} onClick={() => likeSong(userInfo.userId, currentMusic.prductionId)}>
                        <BsHeart color='var(--grey-03)' size={24}/>
                    </CircleButton>
                )
            }
        </Player>
    )
}

export default Footer;
