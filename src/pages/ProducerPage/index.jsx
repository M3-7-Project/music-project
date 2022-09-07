import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import CircleButton from "../../components/CircleButton";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Cover, DropDown, Header, HeaderButton, HeaderContent, HeaderImage, Line, Main, Triangle, Bio, Contact } from "./styles";
import { AiOutlineMenu, AiOutlinePlus, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import cover from "../../assets/cover.png";
import LaunchCard from "./LaunchCard";
import NextLaunch from "./NextLaunch";
import { ProducerContext } from "../../contexts/ProducerContext";
import { LoadingContext } from "../../contexts/LoandingContext";
import { ModalContext } from "../../contexts/ModalContext";
import { DropdownButton } from "../../components/DropdownButton";
import { AnimatePresence } from "framer-motion";
import { DropdownContext } from "../../contexts/DropdownContext";
import HeaderDropdown from "../../components/Dropdown";
import { useParams } from "react-router-dom";

const ProducerPage = () => {
  const { isOpen, onpenDropDown, producer, animation, indexProductions, getProducer, setIdToSearch, idToSearch } =
    useContext(ProducerContext);
  const { userInfo } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { showMenu } = useContext(DropdownContext);

  const { id } = useParams();
  const { setIsEditProducer, setIsCreateSingle, setIsCreateAlbum } =
    useContext(ModalContext);

  useEffect(() => {
    setIdToSearch(id);
    setIsLoading(true);
    getProducer();
  }, [indexProductions, idToSearch, id]);

  return (
    <>
      <AnimatePresence>{showMenu && <HeaderDropdown />}</AnimatePresence>
      <Header>
        <Cover src={cover} />
        <HeaderImage>
          <DropdownButton />
          <img src={producer?.profile_picture}></img>
        </HeaderImage>
        <HeaderContent>
          <h1>{producer?.artistic_name}</h1>
          <h4>{producer?.genre?.join(" | ")}</h4>
        </HeaderContent>
        <HeaderButton>
          {isOpen && (
            <DropDown animation={animation}>
              <button onClick={() => setIsEditProducer(true)}>
                Editar Perfil
              </button>
              <Line></Line>
              <button onClick={() => setIsCreateSingle(true)}>
                Criar Single
              </button>
              <Line></Line>
              <button onClick={() => setIsCreateAlbum(true)}>
                Criar Álbum
              </button>
              <Triangle />
            </DropDown>
          )}
          {userInfo.userId == producer.userId ? (
            <CircleButton radius={60} onClick={onpenDropDown}>
              <AiOutlinePlus size={30} color="var(--grey-03)" />
            </CircleButton>
          ) : (
            <Button width={170} height={60} color="--emphasis-0" content="Seguir" />
          )}
        </HeaderButton>
      </Header>
      <Main>
        <Bio>
          <p>{producer?.description}</p>
          <Contact>
            <p>Acompanhe Também nossas redes sociais:</p>
            <div>
              <a href={"producer?.social_media[1]"} target="_blank">
                <AiFillInstagram size={45} color="var(--grey-03)" />
              </a>
              <a href={"producer?.social_media[0]"} target="_blank">
                <BsFacebook size={38} color="var(--grey-03)" />
              </a>
              <a href={"producer?.social_media[2]"} target="_blank">
                <BsTwitter size={40} color="var(--grey-03)" />
              </a>
              <a href={"producer?.social_media[3]"} target="_blank">
                <BsYoutube size={40} color="var(--grey-03)" />
              </a>
            </div>
          </Contact>
        </Bio>
        <LaunchCard />
        <NextLaunch />
      </Main>
      <Footer />
    </>
  );
};

export default ProducerPage;
