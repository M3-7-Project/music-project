import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { VotedMusicList } from "../../styles";
import { VotedCard } from "../VotedCard";

export const VotedList = () => {
  const { votedProductions } = useContext(DashboardContext);

  if (votedProductions.length === 0) {
    return (
      <VotedMusicList>
        <small>Você ainda não curtiu nenhuma produção!</small>
      </VotedMusicList>
    );
  }

  return (
    <VotedMusicList>
      {votedProductions.map((production) => {
        return (
          <VotedCard
            id={production.id}
            scoreId={production.scoreId}
            key={production.id}
            name={production.name}
            cover={production.cover}
            preview={production.preview}
            artist={production?.producer.artistic_name}
            type={production.type}
          />
        );
      })}
    </VotedMusicList>
  );
};
