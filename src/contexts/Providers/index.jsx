import { DashboardProvider } from "../DashboardContext";
import { DropdownProvider } from "../DropdownContext";
import { LoadingProvider } from "../LoandingContext";
import { LoginProvider } from "../LoginContext";
import { ModalProvider } from "../ModalContext";
import { MusicProvider } from "../MusicContext/Index";
import { ProducerProvider } from "../ProducerContext";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <DashboardProvider>
        <DropdownProvider>
          <UserProvider>
            <LoadingProvider>
              <LoginProvider>
                <ProducerProvider>
                  <ProductsProvider>
                    <MusicProvider>{children}</MusicProvider>
                  </ProductsProvider>
                </ProducerProvider>
              </LoginProvider>
            </LoadingProvider>
          </UserProvider>
        </DropdownProvider>
      </DashboardProvider>
    </ModalProvider>
  );
};

export default Providers;
