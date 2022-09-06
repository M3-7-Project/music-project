import { LoadingProvider } from "../LoandingContext";
import { LoginProvider } from "../LoginContext";
import { MusicProvider } from "../MusicContext/Index";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LoadingProvider>
        <LoginProvider>
          <ProductsProvider>
            <MusicProvider>{children}</MusicProvider>
          </ProductsProvider>
        </LoginProvider>
      </LoadingProvider>
    </UserProvider>
  );
};

export default Providers;
