import CircleButton from "../../../../components/CircleButton";
import { Buttons, Container, Content } from "./styles";
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai';
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";

const MusicAlbum = ({ music, date, artist }) => {
    const { userInfo } = useContext(UserContext);
    return (
        <>
            <Container>
                <Content>
                    <h3>{music}</h3>
                    <p>{date}</p>
                    <p>{artist.artistic_name}</p>
                    <Buttons>
                        <CircleButton radius='50'>
                            <BsPlayFill />
                        </CircleButton>
                        <CircleButton radius='50'>
                            {
                                userInfo.userId == artist.userId ?
                                    <AiOutlinePlus />
                                    :
                                    <AiOutlineHeart />
                            }
                        </CircleButton>
                    </Buttons>
                </Content>
            </Container>
        </>
    );
}

export default MusicAlbum;