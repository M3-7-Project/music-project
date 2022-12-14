import { createContext, useState } from "react";
import { getProfileRequest } from "../../services/api";

export const productsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const productToken = () => localStorage.getItem("@onflow:token");
  const productTokenId = () => localStorage.getItem("@onflow:id");
  const [album, setAlbum] = useState({});
  const productProfile = async () => {
    return await getProfileRequest("", { userId: productTokenId() }).then(
      (res) => res.data[0].id
    );
  };

  const getInfos = async () => {
    return await getProfileRequest("", { userId: productTokenId() }).then(
      (res) => res.data
    );
  };

  const parseDate = (data) => {
    const date = data.split("-");
    return Date.parse(new Date(date[0], date[1], date[2]));
  };

  return (
    <productsContext.Provider
      value={{
        parseDate,
        productToken,
        productTokenId,
        productProfile,
        getInfos,
        album,
        setAlbum,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
