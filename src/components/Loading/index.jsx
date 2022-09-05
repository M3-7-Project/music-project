import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoandingContext";
import { LoadingStyled } from "./styles";

const Loading = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    isLoading && (
      <LoadingStyled>
        <div class="container">
          <div class="column column1"></div>
          <div class="column column2"></div>
          <div class="column column3"></div>
          <div class="column column4"></div>
          <div class="column column5"></div>
          <div class="column column6"></div>
          <div class="column column7"></div>
          <div class="column column8"></div>
        </div>
      </LoadingStyled>
    )
  );
};

export default Loading;
