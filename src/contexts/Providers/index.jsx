import { DashboardProvider } from "../DashboardContext";
import { DropdownProvider } from "../DropdownContext";
import { LoginProvider } from "../LoginContext";
import { MusicProvider } from "../MusicContext/Index";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LoginProvider>
        <ProductsProvider>
          <DropdownProvider>
            <MusicProvider>
              <DashboardProvider>{children}</DashboardProvider>
            </MusicProvider>
          </DropdownProvider>
        </ProductsProvider>
      </LoginProvider>
    </UserProvider>
  );
};

export default Providers;
