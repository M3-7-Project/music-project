import { UserProvider } from "../UserContext"
import { MusicProvider } from "../UserContext/MusicContext";

const Providers = ({children}) => {
    return (
        <UserProvider>
            <MusicProvider>
                {children}
            </MusicProvider>
        </UserProvider>
    )
}

export default Providers;