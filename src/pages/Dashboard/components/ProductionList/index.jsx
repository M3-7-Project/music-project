import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { ProductionCard } from "../ProductionCard";
import { ProdList } from "./styles";

export const ProductionList = () => {
  const { searchedProductions } = useContext(DashboardContext);

  return (
    <ProdList>
      {searchedProductions.length > 0 ? (
        searchedProductions.map((production) => {
          return (
            <ProductionCard
              key={production.id}
              id={production.id}
              cover={production.cover}
              name={production.name}
              preview={production.preview}
              type={production.type}
              artist={production.producer.artistic_name}
            />
          );
        })
      ) : (
        <small>Não encontramos nenhuma produção correspondente :(</small>
      )}
    </ProdList>
  );
};
