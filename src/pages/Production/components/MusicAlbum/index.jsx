import CircleButton from "../../../../components/CircleButton";
import { Buttons, Container, Content } from "./styles";
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const MusicAlbum = ({music, date, artist}) => {
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
                            <AiOutlineHeart />
                        </CircleButton>
                    </Buttons>
                </Content>
            </Container>
        </>
    );
}

export default MusicAlbum;