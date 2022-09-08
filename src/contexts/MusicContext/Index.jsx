import { useState, useRef, createContext, useEffect, useContext } from "react";
import TrialMusic from "../../assets/music/sound1.mp3";
import TrialMusic2 from "../../assets/music/sound2.mp3";
import TrialMusic3 from "../../assets/music/sound3.mp3";
import TrialMusic4 from "../../assets/music/sound4.mp3";
import CoopedUp from "../../assets/music/coopedup.mp3";
import { createVoteRequest } from "../../services/api";
import toast from "react-hot-toast";
import { DashboardContext } from "../DashboardContext";

export const MusicContext = createContext({});

export const MusicProvider = ({ children }) => {
  const { votedProductions } = useContext(DashboardContext);
  const [musics, SetMusics] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, SetCurrentMusic] = useState(null);
  const [progress, setProgress] = useState({
    progress: 0,
    time: 0,
    length: 0,
  });

  const audioElemt = useRef();

  const selectMusic = (production) => {
    const files = [TrialMusic, TrialMusic2, TrialMusic3, TrialMusic4, CoopedUp];

    const result = {
      name: production.name,
      cover: production.cover,
      song:
        files.find((element) => {
          return element.split("/src/assets/music/").join("") == production.song;
        }) || files[0],
      productionId: production.productionId,
      isLiked: votedProductions.find((element) => element.productionId == production.Id) || {},
      id: production?.id,
    };

    SetMusics([result]);
    SetCurrentMusic(result);

    play();
  };

  useEffect(() => {
    if (audioElemt.current) {
      isPlaying ? audioElemt.current.play() : audioElemt.current.pause();
    }
  }, [isPlaying]);

  const play = () => {
    setIsPlaying(!isPlaying);
  };

  const onPlaying = () => {
    const duration = audioElemt.current.duration;
    const currentTime = audioElemt.current.currentTime;

    const music = {
      progress: (currentTime / duration) * 100,
      time: currentTime,
      length: duration,
    };

    setProgress(music);
  };

  const musicTime = useRef();

  const changeTime = (event) => {
    const width = musicTime.current.clientWidth;
    const offset = event.nativeEvent.offsetX;

    const musicProgress = (offset / width) * 100;

    audioElemt.current.currentTime = (musicProgress / 100) * progress.length;
  };

  const skipBack = () => {
    const index = musics.findIndex((element) => element === currentMusic);

    index == 0 ? (audioElemt.current.currentTime = 0) : SetCurrentMusic(musics[index - 1]);

    audioElemt.current.currentTime = 0;
    setTimeout(() => {
      audioElemt.current.play();
    }, 1);
  };

  const skipNext = () => {
    const index = musics.findIndex((element) => element === currentMusic);

    index == musics.length - 1 ? SetCurrentMusic(musics[0]) : SetCurrentMusic(musics[index + 1]);

    audioElemt.current.currentTime = 0;
    setTimeout(() => {
      audioElemt.current.play();
    }, 1);
  };

  const toMinute = (number) => {
    if (number) {
      const toSeconds = Math.round(number);
      const minutes = Math.floor(toSeconds / 60);

      const seconds = toSeconds - 60 * minutes;

      return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
    }
    return "0:00";
  };

  const likeSong = async (userId, productionId, name) => {
    if (!votedProductions.find((element) => element.productionId == productionId)) {
      try {
        const response = await createVoteRequest(
          {
            userId: userId,
            profileId: userId,
            productionId: productionId,
            name: name,
          },
          window.localStorage.getItem("@onflow:token")
        );

        toast.success("Música adicionada à sua lista!");
      } catch (err) {
        console.log(err);
        toast.error("Houve um erro ao adicionar a música.");
      }
    }
  };

  return (
    <MusicContext.Provider
      value={{
        audioElemt,
        musics,
        play,
        isPlaying,
        currentMusic,
        onPlaying,
        progress,
        changeTime,
        musicTime,
        skipBack,
        skipNext,
        toMinute,
        likeSong,
        selectMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
