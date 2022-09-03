import { LoginProvider } from "../LoginContext";
import { UserProvider } from "../UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LoginProvider>{children}</LoginProvider>
    </UserProvider>
  );
};

export default Providers;
