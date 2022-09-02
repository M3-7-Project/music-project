import { useState, useRef, createContext, useEffect } from "react";
import TrialMusic from '../../assets/music/Caslo.mp3'
import TrialMusic2 from '../../assets/music/Jules.mp3'

export const MusicContext = createContext({});

export const MusicProvider = ({children}) => {
    const [musics, SetMusics] = useState([TrialMusic, TrialMusic2])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentMusic, SetCurrentMusic] = useState(musics[0])
    const [progress, setProgress] = useState({
        progress: 0,
        length: 0
    })

    const audioElemt = useRef()

    useEffect(()=>{
        isPlaying ? audioElemt.current.play() : audioElemt.current.pause()
    }, [isPlaying])

    const play = () => {
        setIsPlaying(!isPlaying)
    }

    const onPlaying = () => {
        const duration = audioElemt.current.duration
        const currentTime = audioElemt.current.currentTime

        const music = {
            progress: (currentTime/duration) * 100,
            length: duration
        }

        setProgress(music)
    }

    const musicTime = useRef()

    const changeTime = (event) => {
        const width = musicTime.current.clientWidth
        const offset = event.nativeEvent.offsetX

        const musicProgress = (offset/width)*100

        audioElemt.current.currentTime = (musicProgress/100) * progress.length
    }

    const skipBack = () => {
        const index = musics.findIndex(element => element === currentMusic)
        
        index == 0 ? audioElemt.current.currentTime = 0 : SetCurrentMusic(musics[index-1])

        audioElemt.current.currentTime = 0
        setTimeout(()=> {
            audioElemt.current.play()
        }, 10)
    }

    const skipNext = () => {
        const index = musics.findIndex(element => element === currentMusic)

        index == musics.length-1 ? SetCurrentMusic(musics[0]) : SetCurrentMusic(musics[index+1])
        
        audioElemt.current.currentTime = 0
        setTimeout(()=> {
            audioElemt.current.play()
        }, 10)
    }
    

    return (
        <MusicContext.Provider value={{audioElemt, musics, play, isPlaying, currentMusic, onPlaying, progress, changeTime, musicTime, skipBack, skipNext}}>
            {children}
        </MusicContext.Provider>
    )
}