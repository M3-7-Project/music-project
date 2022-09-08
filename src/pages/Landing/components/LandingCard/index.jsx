import { ProductionCard } from "./styles";

export const LandingCard = ({ name, cover }) => {
  return (
    <ProductionCard>
      <div className="imageWrapper">
        <img src={cover} alt={`Imagem do álbum ${name}`} />
      </div>
      <p>{name}</p>
    </ProductionCard>
  );
};
