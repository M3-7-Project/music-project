import Header from "./components/Header";
import LandingFooter from "./components/LandingFooter";
import { LandingList } from "./components/LandingList";
import MainContent from "./components/MainContent";
import { Body } from "./styles";

const Landing = () => {
  return (
    <Body>
      <Header />
      <MainContent />
      <LandingList />
      <LandingFooter />
    </Body>
  );
};

export default Landing;
