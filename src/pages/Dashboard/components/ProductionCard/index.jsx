import { BiPlay } from "react-icons/bi";
import { MusicButtons, MusicCard, MusicCardDetails, MusicCardInfo } from "../../styles";
import { Link } from "react-router-dom";

export const ProductionCard = ({ id, cover, name, preview, artist, type }) => {
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
        </MusicButtons>
      </MusicCardDetails>
    </MusicCard>
  );
};
