import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoandingContext";
import { LoadingStyled } from "./styles";

const Loading = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    isLoading && (
      <LoadingStyled>
        <div className="container">
          <div className="column column1"></div>
          <div className="column column2"></div>
          <div className="column column3"></div>
          <div className="column column4"></div>
          <div className="column column5"></div>
          <div className="column column6"></div>
          <div className="column column7"></div>
          <div className="column column8"></div>
        </div>
      </LoadingStyled>
    )
  );
};

export default Loading;
