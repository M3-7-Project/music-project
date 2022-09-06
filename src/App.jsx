import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import { Global } from "./styles/global";
import Loading from "./components/Loading";
import { fontWeight } from "@mui/system";

function App() {
  return (
    <>
      <Global />
      <Toaster 
        position= "top-right"
        reverseOrder= {false}
        toastOptions= {{
          success: {
            style: {
              background: '#A76CB2',
              padding: '1rem',
              color: 'white',
              fontWeight: '600',
            }},
          error: {
            style: {
              background: '#272C31',
              padding: '1rem',
              color: 'white',
              fontWeight: '600',
            }}, 
          loading: {
            style: {
              background: '#F0F0F0',
              padding: '1rem',
              color: 'black',
              fontWeight: '600',
            }}
        } 
      }/>
      <Routes />
      <Loading/>
    </>
  );
}

export default App;
