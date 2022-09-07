import { Launchs, Controls, List } from "./styles";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useContext } from "react";
import { ProducerContext } from "../../../contexts/ProducerContext";
import { useNavigate } from "react-router-dom";

const NextLaunch = () => {
  const { productions, toNext, toPrevious } = useContext(ProducerContext);
  const navigate = useNavigate();

  return (
    <Launchs>
      <div>
        <h3>Outros Lançamentos</h3>
        <Controls>
          <button onClick={toPrevious}>
            <BsChevronLeft size={20} color="var(--grey-03)" />
          </button>
          <button onClick={toNext}>
            <BsChevronRight size={20} color="var(--grey-03)" />
          </button>
        </Controls>
      </div>
      <List>
        {productions.length > 0 ? (
          productions.map((element) => {
            return (
              <li key={element.id}>
                <button onClick={() => navigate(`/${element?.type}/${element?.id}`)}>
                  <img src={element.cover} />
                </button>
                <h4>{element.name}</h4>
              </li>
            );
          })
        ) : (
          <small>Nenhum lançamento encontrado!</small>
        )}
      </List>
    </Launchs>
  );
};

export default NextLaunch;
