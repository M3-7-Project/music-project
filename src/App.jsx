import Routes from "./routes";
import { Toaster } from "react-hot-toast";

import { Global } from "./styles/global";
import GeneralModal from "./components/Modal/GeneralModal";

function App() {
  return (
    <>
      <Global />
      <Toaster />
      <Routes />
      <GeneralModal />
    </>
  );
}

export default App;
