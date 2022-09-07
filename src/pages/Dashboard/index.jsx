import {
  ArrowButtonGroup,
  DashboardHeader,
  DashboardHottest,
  DashboardInfo,
  DashboardMain,
  DashboardSearchArtist,
  DashboardSearchProduction,
  DashboardWrapper,
  FeaturedArtists,
  HeaderNavigation,
  HeaderNavigationInput,
  HeaderProfile,
  HeaderProfilePicture,
  HottestTitle,
  VotedMusics,
} from "./styles";
import { BsFillGearFill, BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Footer from "../../components/Footer";
import HeaderDropdown from "../../components/Dropdown";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/DropdownContext";
import { UserContext } from "../../contexts/UserContext";
import { HottestList } from "./components/HottestList";
import { DashboardContext } from "../../contexts/DashboardContext";
import { VotedList } from "./components/VotedList";
import { FeaturedList } from "./components/FeaturedList";
import { useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { ProductionList } from "./components/ProductionList";
import { ProducerList } from "./components/ArtistList";
import TransitionPage from "../../components/TransitionPage";
import { LoadingContext } from "../../contexts/LoandingContext";
import { ModalContext } from "../../contexts/ModalContext";

const Dashboard = () => {
  const { handleDropdownOpening, showMenu } = useContext(DropdownContext);
  const { userInfo } = useContext(UserContext);
  const {
    loadNextAlbuns,
    loadPrevAlbuns,
    getProductions,
    getVotedProductions,
    getFeaturedArtists,
    getProductionBySearch,
    getProducerBySearch,
    productionPage,
  } = useContext(DashboardContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsEditProfile, setIsEditProducer } = useContext(ModalContext);
  const [userSearch, setUserSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [shouldSearch, setShouldSearch] = useState(false);

  const handleSearch = (e) => {
    if (userSearch === "") {
      setShouldSearch(false);
    }
    e.preventDefault();
    setSearchParams(createSearchParams({ search: userSearch }));
  };

  const editProfile = () => {
    userInfo.type === "producer" ? setIsEditProducer(true) : setIsEditProfile(true);
  };

  useEffect(() => {
    setIsLoading(true);
    const queryParams = searchParams.get("search");
    if (queryParams === null || queryParams === "") {
      getProductions();
      getVotedProductions();
      getFeaturedArtists();
    } else {
      setShouldSearch(true);
      getProductionBySearch(queryParams);
      getProducerBySearch(queryParams);
    }
    setIsLoading(false);
  }, [searchParams, productionPage]);

  return (
    <TransitionPage>
      <DashboardWrapper>
        {showMenu && <HeaderDropdown />}
        <DashboardHeader>
          <HeaderNavigation>
            <button id="menu-button" onClick={() => handleDropdownOpening()}>
              <BiMenu size={30} />
            </button>
            <HeaderNavigationInput>
              <form>
                <input type="text" placeholder="Insira sua pesquisa" onChange={(e) => setUserSearch(e.target.value)} />
                <button onClick={(e) => handleSearch(e)}>
                  <BsSearch />
                </button>
              </form>
            </HeaderNavigationInput>
          </HeaderNavigation>
          <HeaderProfile>
            <p>{userInfo?.artistic_name}</p>
            <HeaderProfilePicture>
              <img src={userInfo?.profile_picture} alt={`Imagem de perfil do ${userInfo?.artistic_name}`} />
            </HeaderProfilePicture>
            <button onClick={editProfile}>
              <BsFillGearFill size={30} />
            </button>
          </HeaderProfile>
        </DashboardHeader>

        <DashboardMain>
          {shouldSearch ? (
            <>
              <DashboardSearchProduction>
                <h2>Produções</h2>
                <ProductionList />
              </DashboardSearchProduction>
              <DashboardSearchArtist>
                <h2>Artistas</h2>
                <ProducerList />
              </DashboardSearchArtist>
            </>
          ) : (
            <>
              <DashboardHottest>
                <HottestTitle>
                  <h2>Nossos lançamentos mais aguardados</h2>
                  <ArrowButtonGroup>
                    <button onClick={() => loadPrevAlbuns()}>
                      <AiOutlineLeft size={20} />
                    </button>
                    <button onClick={() => loadNextAlbuns()}>
                      <AiOutlineRight size={20} />
                    </button>
                  </ArrowButtonGroup>
                </HottestTitle>
                <HottestList />
              </DashboardHottest>
              <DashboardInfo>
                <VotedMusics>
                  <h2>Produções votadas</h2>
                  <VotedList />
                </VotedMusics>
                <FeaturedArtists>
                  <h2>Você também pode gostar</h2>
                  <FeaturedList />
                </FeaturedArtists>
              </DashboardInfo>
            </>
          )}
        </DashboardMain>
        <Footer />
      </DashboardWrapper>
    </TransitionPage>
  );
};

export default Dashboard;
