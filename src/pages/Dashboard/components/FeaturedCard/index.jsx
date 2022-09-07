import { Link } from "react-router-dom";
import { ArtistCard, ArtistImage } from "../../styles";

export const FeaturedCard = ({ name, image, id }) => {
  return (
    <ArtistCard>
      <Link to={`/producer/${id}`}>
        <ArtistImage>
          <img src={image} alt={`Imagem do ${name}`} />
        </ArtistImage>
        <p>{name}</p>
      </Link>
    </ArtistCard>
  );
};
