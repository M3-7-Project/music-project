import { useState, useRef, createContext, useEffect } from "react";
import TrialMusic from '../../assets/music/Caslo.mp3'
import TrialMusic2 from '../../assets/music/Jules.mp3'

export const MusicContext = createContext({});

export const MusicProvider = ({children}) => {
    const [musics, SetMusics] = useState([TrialMusic, TrialMusic2])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentMusic, SetCurrentMusic] = useState(musics[0])

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

        console.log(duration, currentTime)
    }
    

    return (
        <MusicContext.Provider value={{audioElemt, musics, play, isPlaying, currentMusic, onPlaying}}>
            {children}
        </MusicContext.Provider>
    )
}