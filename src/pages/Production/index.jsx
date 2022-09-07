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
  DropDown,
  FlexContent,
  Line,
  MidContent,
  MusicList,
  PeopleWaiting,
  SocialMedia,
  SocialMedias,
  Triangle,
} from "./styles";
import MusicAlbum from "./components/MusicAlbum";
import Comments from "./components/Comments";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  getCommentRequest,
  getProductionRequest,
  getProfileRequest,
} from "../../services/api";
import { LoadingModal } from "../Register/styles";
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import { productsContext } from "../../contexts/ProductsContext";

const Production = () => {
  const { userInfo } = useContext(UserContext);
  const { openEditAlbum, openEditSingle, openAddMusic, openDeleteProduct} =
    useContext(ModalContext);
  const { album, setAlbum } = useContext(productsContext);
  const { id } = useParams();
  const [albumUser, setAlbumUser] = useState({});
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("close");

  useEffect(() => {
    updateMusics();
    updateComments();
  }, []);

  useEffect(() => {
    if (animation == "open") {
      setIsOpen(true);
    } else {
      setAnimation("close");
      setTimeout(() => {
        setIsOpen(false);
      }, 600);
    }
  }, [animation]);

  const onpenDropDown = () => {
    if (animation == "open") {
      setAnimation("close");
    } else {
      setAnimation("open");
    }
  };

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

  const editProduct = () => {
    album.type === "album" ? openEditAlbum(album.id) : openEditSingle(album.id);
  };

  return (
    <>
      {isLoading ? (
        <LoadingModal>Carregando</LoadingModal>
      ) : (
        <Container>
          <Content>
            <AlbumImageContainer url={album.cover}>
              <AlbumImageContent>
                <AlbumImageContentTop>
                  <CircleButton radius={50}>
                    <FaBars />
                  </CircleButton>
                </AlbumImageContentTop>
                <AlbumImageContentBottom>
                  <div>
                    <h1>{album?.name}</h1>
                    <h3>
                      Lançamento{" "}
                      {new Date(parseInt(album?.date)).toLocaleDateString()}
                    </h3>
                  </div>
                  <section>
                    {isOpen && (
                      <DropDown animation={animation}>
                        {album.type === "album" && (
                          <button onClick={() => openAddMusic(album.id)}>
                            Adicionar música
                          </button>
                        )}
                        <Line></Line>
                        <button onClick={()=> openDeleteProduct(album.name, album.id)}>Apagar</button>
                        <Line></Line>
                        <button onClick={editProduct}>Editar</button>
                        <Triangle />
                      </DropDown>
                    )}
                    <CircleButton radius="50" onClick={onpenDropDown}>
                      {userInfo.userId == album.userId ? (
                        <AiOutlinePlus />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </CircleButton>
                  </section>
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
                    <MusicAlbum
                      music={music}
                      date={new Date(
                        parseInt(album?.date)
                      ).toLocaleDateString()}
                      artist={albumUser}
                      key={id}
                      id={id}
                      album={album.id}
                    />
                  );
                })}
              </MusicList>
            </FlexContent>
            <Comments
              comments={comments}
              updateComments={updateComments}
              setIsLoading={setIsLoading}
              productionId={id}
            />
          </Content>
        </Container>
      )}
    </>
  );
};

export default Production;
