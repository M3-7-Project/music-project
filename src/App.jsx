import Routes from './routes'
import { Toaster } from 'react-hot-toast'

import { Global } from './styles/global'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Global />
      <Toaster />
      <Routes />
      <Footer/>
    </>
  )
}

export default App
