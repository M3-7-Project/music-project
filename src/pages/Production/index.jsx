import { FaBars } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import CircleButton from '../../components/CircleButton'
import { AlbumDescription, AlbumImageContainer, AlbumImageContent, AlbumImageContentBottom, AlbumImageContentTop, Container, Content, FlexContent, MidContent, MusicList, PeopleWaiting, SocialMedia, SocialMedias } from './styles';
import MusicAlbum from './components/MusicAlbum';
import Comments from './components/Comments';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCommentRequest, getProductionRequest } from '../../services/api';

const Production = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState({});
    const [comments, setComments] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('carregando');
        getProductionRequest(id, {})
            .then((res) => {
                console.log(res.data);
                setAlbum(res.data);
            });

        getCommentRequest('')
            .then(res => {
                console.log(res.data);
                setComments(res.data.filter(comment => comment.productionId == id));
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            {
                !isLoading &&
                <Container>
                    <Content>
                        <AlbumImageContainer url={album.cover}>
                            <AlbumImageContent>
                                <AlbumImageContentTop>
                                    <CircleButton radius='50'>
                                        <FaBars />
                                    </CircleButton>
                                </AlbumImageContentTop>
                                <AlbumImageContentBottom>
                                    <div>
                                        <h1>{album?.name}</h1>
                                        <h3>Lançamento {album?.date}</h3>
                                    </div>
                                    <CircleButton radius='50'>
                                        <AiOutlineHeart />
                                    </CircleButton>
                                </AlbumImageContentBottom>
                            </AlbumImageContent>
                        </AlbumImageContainer>
                        <FlexContent>
                            <MidContent>
                                <AlbumDescription>
                                    <p>
                                        {album?.bio}
                                    </p>
                                </AlbumDescription>
                                <SocialMedia>
                                    <p>Acompanhe também nossas redes sociais:</p>
                                    <SocialMedias>
                                        <BsFacebook />
                                        <BsInstagram />
                                        <BsTwitter />
                                        <BsYoutube />
                                    </SocialMedias>
                                </SocialMedia>
                                <PeopleWaiting>
                                    <h2>15k</h2>
                                    <p>Pessoas estão esperando esse álbum</p>
                                </PeopleWaiting>
                            </MidContent>
                            <MusicList>
                                {
                                    album?.musics?.map((music, id) => <MusicAlbum music={music} key={id} />)
                                }
                            </MusicList>
                        </FlexContent>
                        <Comments comments={comments} />
                    </Content>
                </Container>

            }

        </>
    )
}

export default Production;