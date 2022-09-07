import CircleButton from "../../../../components/CircleButton";
import { Buttons, Container, Content } from "./styles";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { ModalContext } from "../../../../contexts/ModalContext";

const MusicAlbum = ({ music, date, artist, id, album }) => {
  const { userInfo } = useContext(UserContext);
  const { openDeleteMusic } = useContext(ModalContext);

  const deleteMusic = () => {
    openDeleteMusic(album, id, music)
  }

  return (
    <>
      <Container>
        <Content>
          <h3>{music}</h3>
          <p>{date}</p>
          <p>{artist.artistic_name}</p>
          <Buttons>
            <CircleButton radius="50">
              <BsPlayFill />
            </CircleButton>
            <CircleButton radius="50" onClick={deleteMusic}>
              {userInfo.userId == artist.userId ? (
                <AiOutlinePlus />
              ) : (
                <AiOutlineHeart />
              )}
            </CircleButton>
          </Buttons>
        </Content>
      </Container>
    </>
  );
};

export default MusicAlbum;
