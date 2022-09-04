import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContent from './components/MainContent';
import { Body } from './styles';

const Landing = () => {
    return (
        <Body>
            <Header/>
                <MainContent/>
            <Footer/>
        </Body>
    )
}

export default Landing;
