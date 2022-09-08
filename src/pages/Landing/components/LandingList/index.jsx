import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { getProductionRequest } from "../../../../services/api";
import { LandingCard } from "../LandingCard";
import { ListWrapper, ProductionList } from "./styles";

export const LandingList = () => {
  const [productionList, setProductionList] = useState([]);

  const getProductions = async () => {
    try {
      const response = await getProductionRequest("", { _limit: 4, _sort: "id", _order: "desc" });
      setProductionList(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao carregar as informações.");
    }
  };

  useEffect(() => {
    getProductions();
  }, []);

  return (
    <ListWrapper>
      <h2>Nossos lançamentos mais aguardados</h2>
      <ProductionList>
        {productionList.map((production) => {
          return <LandingCard key={production.id} name={production.name} cover={production.cover} />;
        })}
      </ProductionList>
    </ListWrapper>
  );
};
