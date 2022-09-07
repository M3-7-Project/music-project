import { Launch, ImageDiv, Content, Title, Controls } from "./styles";
import CircleButton from "../../../components/CircleButton";
import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { useContext } from "react";
import { MusicContext } from "../../../contexts/MusicContext/Index";
import { ProducerContext } from "../../../contexts/ProducerContext";
import { UserContext } from "../../../contexts/UserContext";
import { Link } from "react-router-dom";

const LaunchCard = () => {
  const { play } = useContext(MusicContext);
  const { productions, producer } = useContext(ProducerContext);
  const { userInfo } = useContext(UserContext);

  return (
    <Launch>
      <Link to={`/${productions[0]?.type}/${productions[0]?.id}`}>
        <ImageDiv>
          <div></div>
          {productions[0]?.cover ? <img src={productions[0]?.cover} /> : <></>}
        </ImageDiv>
      </Link>
      <Content>
        <div>
          <Title>
            <h2>{productions[0]?.name}</h2>
            <h4>{productions[0]?.date.split(" ")[0]}</h4>
          </Title>
          <Controls>
            <CircleButton radius={50} onClick={play}>
              <BsFillPlayFill size={25} color="var(--grey-03)" />
            </CircleButton>
            {userInfo.userId == producer.userId ? (
              <></>
            ) : (
              <CircleButton radius={50}>
                <BsHeart size={25} color="var(--grey-03)" />
              </CircleButton>
            )}
          </Controls>
        </div>
        <p>{productions[0]?.bio}</p>
      </Content>
    </Launch>
  );
};

export default LaunchCard;
