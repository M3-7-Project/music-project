import CircleButton from "../../../../components/CircleButton";
import { Buttons, Container, Content } from "./styles";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { BiPlay, BiTrashAlt } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { ModalContext } from "../../../../contexts/ModalContext";
import { MusicContext } from "../../../../contexts/MusicContext/Index";

const MusicAlbum = ({ music, date, artist, id, album, preview, cover, productionId }) => {
  const { userInfo } = useContext(UserContext);
  const { openDeleteMusic } = useContext(ModalContext);
  const { selectMusic, currentMusic, isPlaying } = useContext(MusicContext);

  const deleteMusic = () => {
    openDeleteMusic(album, id, music);
  };

  return (
    <>
      <Container>
        <Content>
          <h3>{music}</h3>
          <p>{date}</p>
          <p>{artist.artistic_name}</p>
          <Buttons>
            <CircleButton
              radius="50"
              onClick={() => selectMusic({ name: music, cover: cover, song: preview, productionId: productionId, id: id })}
            >
              {currentMusic?.id == id && isPlaying ? <BsPauseFill color="var(--grey-03)" size={30} /> : <BiPlay />}
            </CircleButton>
            <CircleButton radius="50" onClick={deleteMusic}>
              {userInfo.userId == artist.userId ? <BiTrashAlt /> : <AiOutlineHeart />}
            </CircleButton>
          </Buttons>
        </Content>
      </Container>
    </>
  );
};

export default MusicAlbum;
