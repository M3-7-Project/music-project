import ReleasesContainer from '../../components/ReleasesContainer';
import Header from './components/Header';
import LandingFooter from './components/LandingFooter';
import MainContent from './components/MainContent';
import { Body } from './styles';

const Landing = () => {
    return (
        <Body>
            <Header/>
                <MainContent/>
                <ReleasesContainer/>
            <LandingFooter/>
        </Body>
    )
}

export default Landing;
