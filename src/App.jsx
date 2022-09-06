import Routes from "./routes";
import { Toaster } from "react-hot-toast";

import { Global } from "./styles/global";
import GeneralModal from "./components/Modal/GeneralModal";
import Loading from "./components/Loading";


function App() {
  return (
    <>
      <Global />
      <Toaster />
      <Routes />
      <GeneralModal />
      <Loading/>
    </>
  );
}

export default App;
