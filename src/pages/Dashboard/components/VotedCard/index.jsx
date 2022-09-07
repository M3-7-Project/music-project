import { useContext } from "react";
import { IoMdHeartDislike } from "react-icons/io";
import { BiPlay } from "react-icons/bi";
import { BsPauseFill } from "react-icons/bs";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { MusicButtons, MusicCard, MusicCardDetails, MusicCardInfo } from "../../styles";
import { Link } from "react-router-dom";
import { MusicContext } from "../../../../contexts/MusicContext/Index";

export const VotedCard = ({ id, scoreId, cover, name, preview, artist, type }) => {
  const { deleteVote } = useContext(DashboardContext);
  const { selectMusic, currentMusic, isPlaying } = useContext(MusicContext);

  return (
    <MusicCard>
      <MusicCardInfo>
        <Link to={`/${type}/${id}`}>
          <img src={cover} alt={`Imagem do álbum ${name}`} />
          <p>{name}</p>
        </Link>
      </MusicCardInfo>
      <MusicCardDetails>
        <p>{artist}</p>
        <MusicButtons>
          <button onClick={() => selectMusic({ name: name, cover: cover, song: preview, productionId: id })}>
            {currentMusic?.productionId == id && isPlaying ? <BsPauseFill color="var(--grey-03)" size={30} /> : <BiPlay />}
          </button>
          <button id="remove-button" onClick={() => deleteVote(scoreId)}>
            <IoMdHeartDislike />
          </button>
        </MusicButtons>
      </MusicCardDetails>
    </MusicCard>
  );
};
