import React from 'react'
import Dessserts from './components/Dessserts'
import { ShopcontextProvider } from './context/Shop-context'

const App = () => {
  return (
    <ShopcontextProvider> 
      <Dessserts />
    </ShopcontextProvider>
    
 
  )
}

export default App