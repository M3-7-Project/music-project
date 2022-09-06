import {Launch, ImageDiv, Content, Title, Controls} from './styles';
import cover from '../../../assets/cover.png'
import CircleButton from '../../../components/CircleButton';
import { BsFillPlayFill , BsHeart} from "react-icons/bs";
import { useContext } from 'react';
import { MusicContext } from '../../../contexts/MusicContext/Index';

const LaunchCard = () => {
    const {play} = useContext(MusicContext)

    return (
        <Launch>
            <ImageDiv>
                <div></div>
                <img src={cover}/>
            </ImageDiv>
            <Content>
                <div>
                    <Title>
                        <h2>On the top</h2>
                        <h4>Lançamento: 24 de setembro 2022</h4>
                    </Title>
                    <Controls>
                        <CircleButton radius={50} onClick={play}>
                            <BsFillPlayFill size={25} color='var(--grey-03)'/>
                        </CircleButton>
                        <CircleButton radius={50}>
                            <BsHeart size={25} color='var(--grey-03)'/>
                        </CircleButton>
                    </Controls>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Content>
        </Launch>
    )
}

export default LaunchCard;