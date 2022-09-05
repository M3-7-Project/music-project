import { LoadingProvider } from "../LoandingContext";
import { LoginProvider } from "../LoginContext";
import { MusicProvider } from "../MusicContext/Index";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LoginProvider>
        <LoadingProvider>
          <ProductsProvider>
            <MusicProvider>{children}</MusicProvider>
          </ProductsProvider>
        </LoadingProvider>
      </LoginProvider>
    </UserProvider>
  );
};

export default Providers;
