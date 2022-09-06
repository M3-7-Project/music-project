import { Link } from "react-router-dom";
import { ProducerCard } from "./style";

export const ArtistCard = ({ name, image, id }) => {
  return (
    <ProducerCard>
      <Link to={`/producer/${id}`}>
        <img src={image} alt={`Imagem do(a) ${name}`} />
        <p>{name}</p>
      </Link>
    </ProducerCard>
  );
};
