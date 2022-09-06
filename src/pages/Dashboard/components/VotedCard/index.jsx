import { useContext } from "react";
import { IoMdHeartDislike } from "react-icons/io";
import { BiPlay } from "react-icons/bi";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { MusicButtons, MusicCard, MusicCardDetails, MusicCardInfo } from "../../styles";
import { Link } from "react-router-dom";

export const VotedCard = ({ id, cover, name, preview, artist, type }) => {
  const { deleteVote } = useContext(DashboardContext);

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
          <button>
            <BiPlay />
          </button>
          <button id="remove-button" onClick={() => deleteVote(id)}>
            <IoMdHeartDislike />
          </button>
        </MusicButtons>
      </MusicCardDetails>
    </MusicCard>
  );
};
