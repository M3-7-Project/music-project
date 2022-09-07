import { useState, useRef, createContext, useEffect, useContext } from "react";
import { getProfileRequest, getProductionRequest } from "../../services/api";
import { LoadingContext } from "../LoandingContext";

export const ProducerContext = createContext({});

export const ProducerProvider = ({ children }) => {
  const [producer, setProducer] = useState({});
  const [productions, setProductions] = useState([]);
  const [indexProductions, setIndexProductions] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("close");
  const { setIsLoading } = useContext(LoadingContext);

  const getProducer = async () => {
    const id = window.location.pathname.split("/producer/")[1];
    const profile = await getProfileRequest(id);
    const production = await getProductionRequest("", {
      _page: indexProductions,
      _limit: 4,
      userId: id,
    });

    const result = production.data.map((element) => {
      return {
        ...element,
        date: new Date(element.date).toLocaleString(),
      };
    });

    setProductions(result);
    setProducer(profile.data);
    setIsLoading(false)
  };

  const toNext = () => {
    if (indexProductions >= productions.length - 1) {
      setIndexProductions(1);
    } else {
      setIndexProductions(indexProductions + 1);
    }
  };

  const toPrevious = () => {
    if (indexProductions == 1) {
      setIndexProductions(1);
    } else {
      setIndexProductions(indexProductions - 1);
    }
  };

  const onpenDropDown = () => {
    if (animation == "open") {
      setAnimation("close");
    } else {
      setAnimation("open");
    }
  };

  useEffect(() => {
    setIsLoading(true)
    getProducer();
  }, [indexProductions]);

  useEffect(() => {
    if (animation == "open") {
      setIsOpen(true);
    } else {
      setAnimation("close");
      setTimeout(() => {
        setIsOpen(false);
      }, 600);
    }
  }, [animation]);

  return (
    <ProducerContext.Provider
      value={{
        onpenDropDown,
        isOpen,
        producer,
        productions,
        toNext,
        toPrevious,
        animation,
      }}
    >
      {children}
    </ProducerContext.Provider>
  );
};
