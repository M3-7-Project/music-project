import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { HottestList } from '../Dashboard/components/HottestList';
import Header from './components/Header';
import LandingFooter from './components/LandingFooter';
import MainContent from './components/MainContent';
import { ArrowButtonGroup, Body, HottestTitle } from './styles';

const Landing = () => {
    return (
        <Body>
            <Header/>
                <MainContent/>
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
                <HottestList/>
            <LandingFooter/>
        </Body>
    )
}

export default Landing;
