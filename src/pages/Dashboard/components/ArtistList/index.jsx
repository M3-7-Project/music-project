import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { ArtistCard } from "../ArtistCard";
import { ProducerUl } from "./style";

export const ProducerList = () => {
  const { searchedProducer } = useContext(DashboardContext);

  return (
    <ProducerUl>
      {searchedProducer.length > 0 ? (
        searchedProducer.map((producer) => {
          return <ArtistCard key={producer.id} id={producer.id} name={producer.artistic_name} image={producer.profile_picture} />;
        })
      ) : (
        <small>Não encontramos nenhum artista correspondente :(</small>
      )}
    </ProducerUl>
  );
};
