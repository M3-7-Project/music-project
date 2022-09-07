import { FaBars } from "react-icons/fa";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import CircleButton from "../../components/CircleButton";
import {
  AlbumDescription,
  AlbumImageContainer,
  AlbumImageContent,
  AlbumImageContentBottom,
  AlbumImageContentTop,
  Container,
  Content,
  FlexContent,
  MidContent,
  MusicList,
  PeopleWaiting,
  SocialMedia,
  SocialMedias,
} from "./styles";
import MusicAlbum from "./components/MusicAlbum";
import Comments from "./components/Comments";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCommentRequest, getProductionRequest, getProfileRequest } from "../../services/api";
import { LoadingModal } from "../Register/styles";
import { AnimatePresence } from "framer-motion";
import HeaderDropdown from "../../components/Dropdown";
import { DropdownContext } from "../../contexts/DropdownContext";
import { DropdownButton } from "../../components/DropdownButton";
import { UserContext } from "../../contexts/UserContext";

const Production = () => {
  const { showMenu } = useContext(DropdownContext);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [albumUser, setAlbumUser] = useState({});
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    updateMusics();
    updateComments();
  }, []);

  const updateMusics = () => {
    getProductionRequest(id, {}).then((res) => {
      setAlbum(res.data);
      getProfileRequest(res.data.userId, {}).then((res) => {
        setAlbumUser(res.data);
      });
    });
  };

  const updateComments = () => {
    getCommentRequest(`?productionId=${id}`).then((res) => {
      setComments(res.data);
      setIsLoading(false);
    });
  };

  return (
    <>
      <AnimatePresence>{showMenu && <HeaderDropdown />}</AnimatePresence>
      {isLoading ? (
        <LoadingModal>Carregando</LoadingModal>
      ) : (
        <Container>
          <Content>
            <AlbumImageContainer url={album.cover}>
              <AlbumImageContent>
                <AlbumImageContentTop>
                  <DropdownButton />
                </AlbumImageContentTop>
                <AlbumImageContentBottom>
                  <div>
                    <h1>{album?.name}</h1>
                    <h3>Lançamento {new Date(parseInt(album?.date)).toLocaleDateString()}</h3>
                  </div>
                  <CircleButton radius="50">{userInfo.userId == album.userId ? <AiOutlinePlus /> : <AiOutlineHeart />}</CircleButton>
                </AlbumImageContentBottom>
              </AlbumImageContent>
            </AlbumImageContainer>
            <FlexContent>
              <MidContent>
                <AlbumDescription>
                  <p>{album?.bio}</p>
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
                {album?.musics?.map((music, id) => {
                  return (
                    <MusicAlbum music={music} date={new Date(parseInt(album?.date)).toLocaleDateString()} artist={albumUser} key={id} />
                  );
                })}
              </MusicList>
            </FlexContent>
            <Comments comments={comments} updateComments={updateComments} setIsLoading={setIsLoading} productionId={id} />
          </Content>
        </Container>
      )}
    </>
  );
};

export default Production;
