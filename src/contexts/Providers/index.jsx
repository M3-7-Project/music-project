import { DashboardProvider } from "../DashboardContext";
import { LoadingProvider } from "../LoandingContext";
import { LoginProvider } from "../LoginContext";
import { ModalProvider } from "../ModalContext";
import { MusicProvider } from "../MusicContext/Index";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <DashboardProvider>
        <UserProvider>
          <LoadingProvider>
            <LoginProvider>
              <ProductsProvider>
                <MusicProvider>{children}</MusicProvider>
              </ProductsProvider>
            </LoginProvider>
          </LoadingProvider>
        </UserProvider>
      </DashboardProvider>
    </ModalProvider>
  );
};

export default Providers;
