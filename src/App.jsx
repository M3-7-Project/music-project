import Routes from "./routes";
import { Toaster } from "react-hot-toast";

import { Global } from "./styles/global";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Global />
      <Toaster />
      <Routes />
      <Loading/>
    </>
  );
}

export default App;
