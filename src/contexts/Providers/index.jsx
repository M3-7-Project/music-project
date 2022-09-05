import { LoginProvider } from "../LoginContext";
import { MusicProvider } from "../MusicContext/Index";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LoginProvider>
        <ProductsProvider>
            <MusicProvider>
              {children} 
            </MusicProvider>
          </ProductsProvider>
      </LoginProvider>
    </UserProvider>
  );
};

export default Providers;
