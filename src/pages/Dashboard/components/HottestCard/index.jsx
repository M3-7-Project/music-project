import { Link } from "react-router-dom";
import { HottestProductionCard } from "../../styles";

export const HottestCard = ({ name, cover, id, type }) => {
  return (
    <HottestProductionCard>
      <Link to={`/${type}/${id}`}>
        <img src={cover} alt={`Imagem do álbum ${name}`} />
        <p>{name}</p>
      </Link>
    </HottestProductionCard>
  );
};
