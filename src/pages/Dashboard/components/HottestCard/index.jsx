import { Link } from "react-router-dom";
import { HottestProductionCard } from "../../styles";

export const HottestCard = ({ name, cover, id, type }) => {
  return (
    <HottestProductionCard>
      <Link to={`/${type}/${id}`}>
        <div className="imageWrapper">
          <img src={cover} alt={`Imagem do álbum ${name}`} />
        </div>
        <p>{name}</p>
      </Link>
    </HottestProductionCard>
  );
};
