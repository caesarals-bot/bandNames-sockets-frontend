
import HomePage from './pages/HomePage'

import { SocketProvider } from './context/socketContext'

export const BandNamesApp = () => {
  return (
    <SocketProvider>
        <HomePage />
    </SocketProvider>
  )
}
