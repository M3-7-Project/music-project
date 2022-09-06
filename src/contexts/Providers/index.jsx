import { LoadingProvider } from "../LoandingContext";
import { LoginProvider } from "../LoginContext";
import { ModalProvider } from "../ModalContext";
import { MusicProvider } from "../MusicContext/Index";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <UserProvider>
        <LoadingProvider>
          <LoginProvider>
            <ProductsProvider>
              <MusicProvider>{children}</MusicProvider>
            </ProductsProvider>
          </LoginProvider>
        </LoadingProvider>
      </UserProvider>
    </ModalProvider>
  );
};

export default Providers;
