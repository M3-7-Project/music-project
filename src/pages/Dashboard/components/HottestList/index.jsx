import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { HottestProductionList } from "../../styles";
import { HottestCard } from "../HottestCard";

export const HottestList = () => {
  const { hotProduction } = useContext(DashboardContext);

  if (hotProduction.length <= 0) {
    return (
      <HottestProductionList>
        <small>Nada encontrado!</small>
      </HottestProductionList>
    );
  }

  return (
    <HottestProductionList>
      {hotProduction.map((production) => {
        return (
          <HottestCard key={production.id} type={production.type} name={production.name} cover={production.cover} id={production.id} />
        );
      })}
    </HottestProductionList>
  );
};
