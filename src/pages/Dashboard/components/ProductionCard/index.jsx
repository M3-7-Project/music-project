import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SearchedProductionCard, SearchedProductionDetails, SearchedProductionInfo } from "./styles";

export const ProductionCard = ({ id, cover, name, preview, artist, type }) => {
  return (
    <SearchedProductionCard>
      <SearchedProductionInfo>
        <Link to={`/${type}/${id}`}>
          <img src={cover} alt={`Imagem do álbum ${name}`} />
          <p>{name}</p>
        </Link>
      </SearchedProductionInfo>
      <SearchedProductionDetails>
        <p>{artist}</p>
        <button>
          <BiPlay />
        </button>
      </SearchedProductionDetails>
    </SearchedProductionCard>
  );
};
