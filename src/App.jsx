import Routes from './routes'
import { Toaster } from 'react-hot-toast'

import { Global } from './styles/global'

function App() {
  return (
    <>
      <Global />
      <Toaster />
      <Routes />
    </>
  )
}

export default App
