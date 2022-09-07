import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import {
  deleteVoteRequest,
  getAllProfilesByTypeRequest,
  getProductionRequest,
  getProfileRequest,
  getVoteRequest,
} from "../../services/api";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
  const [hotProduction, sethotProduction] = useState([]);
  const [votedProductions, setVotedProductions] = useState([]);
  const [featuredProducers, setFeaturedProducers] = useState([]);
  const [productionPage, setProductionPage] = useState(1);
  const [searchedProductions, setSearchedProductions] = useState([]);
  const [searchedProducer, setSearchedProducer] = useState([]);

  const getProductions = async () => {
    try {
      const response = await getProductionRequest("", { _embed: "score", _page: productionPage, _limit: 4, _sort: "id", _order: "desc" });
      sethotProduction(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao carregar as informações.");
    }
  };

  const getFeaturedArtists = async () => {
    if (featuredProducers.length > 0) {
      return;
    }
    try {
      const response = await getProfileRequest("", { type: "producer", _order: "desc", _limit: 4, _sort: "id" });
      setFeaturedProducers(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao carregar as informações.");
    }
  };

  const getVotedProductions = async () => {
    if (featuredProducers.length > 0) {
      return;
    }
    try {
      const userId = localStorage.getItem("@onflow:id");
      const response = await getVoteRequest("", { userId: userId, _order: "desc", _limit: 4, _sort: "id" });

      const newProductionPromises = response.data.map(async (prodInfo) => {
        const production = await getProductionRequest(prodInfo.productionId);
        const producer = await getProfileRequest(production.data.profileId);
        production.data.producer = producer.data;
        return production.data;
      });

      const returnData = await Promise.all(newProductionPromises);
      console.log("~ returnData", returnData);
      setVotedProductions(returnData);
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao carregar as informações.");
    }
  };

  const getProductionBySearch = async (searchInput) => {
    try {
      const response = await getProductionRequest("");
      const filteredProductions = response.data.filter((production) => {
        const treatedInput = searchInput.toLowerCase().trim();
        const treaderProdName = production.name.toLowerCase().trim();

        if (treaderProdName.includes(treatedInput)) {
          return production;
        }
      });

      const filteredWithProducers = filteredProductions.map(async (production) => {
        const producer = await getProfileRequest(production?.profileId);
        production.producer = producer.data;
        return production;
      });

      const returnData = await Promise.all(filteredWithProducers);
      setSearchedProductions(returnData);
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao carregar as informações.");
    }
  };

  const getProducerBySearch = async (searchInput) => {
    try {
      const response = await getAllProfilesByTypeRequest("producer");
      const filteredProducer = response.data.filter((producer) => {
        const treatedInput = searchInput.toLowerCase().trim();
        const treaderProdName = producer.artistic_name.toLowerCase().trim();

        if (treaderProdName.includes(treatedInput)) {
          return producer;
        }
      });
      setSearchedProducer(filteredProducer);
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao carregar as informações.");
    }
  };

  const loadNextAlbuns = () => {
    setProductionPage((prevPage) => prevPage + 1);
  };

  const loadPrevAlbuns = () => {
    if (productionPage - 1 <= 0) {
      return;
    }
    setProductionPage((prevPage) => prevPage - 1);
  };

  const deleteVote = async (id) => {
    const token = localStorage.getItem("@onflow:token");
    try {
      await deleteVoteRequest(id, token);
      await getVotedProductions();
    } catch (error) {
      toast.error("Houve um erro ao retirar seu voto");
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        hotProduction,
        loadNextAlbuns,
        loadPrevAlbuns,
        votedProductions,
        deleteVote,
        featuredProducers,
        getProductionBySearch,
        getProductions,
        getVotedProductions,
        getFeaturedArtists,
        searchedProductions,
        searchedProducer,
        getProducerBySearch,
        productionPage,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
