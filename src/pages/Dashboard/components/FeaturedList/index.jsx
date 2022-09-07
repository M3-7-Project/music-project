import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { ArtistList } from "../../styles";
import { FeaturedCard } from "../FeaturedCard";

export const FeaturedList = () => {
  const { featuredProducers } = useContext(DashboardContext);

  return (
    <ArtistList>
      {featuredProducers.map((producer) => {
        return <FeaturedCard key={producer.id} id={producer.id} name={producer.artistic_name} image={producer.profile_picture} />;
      })}
    </ArtistList>
  );
};
