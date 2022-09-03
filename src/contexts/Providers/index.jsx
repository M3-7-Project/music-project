import { LoginProvider } from "../LoginContext";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LoginProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </LoginProvider>
    </UserProvider>
  );
};

export default Providers;
