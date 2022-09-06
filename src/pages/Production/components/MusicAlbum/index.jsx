import CircleButton from "../../../../components/CircleButton";
import { Buttons, Container, Content } from "./styles";
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const MusicAlbum = ({music}) => {
    return (
        <>
            <Container>
                <Content>
                    <h3>{music}</h3>
                    <p>24 de setembro 2022</p>
                    <p>Artista</p>
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