import React,{useState} from 'react'
import Dessserts from './components/Dessserts'
import { ShopcontextProvider } from './context/Shop-context'
import RecieptModal from './components/RecieptModal'

const App = () => {
   const [modal, setModal] = useState(false)
  return (
    <ShopcontextProvider> 
      {modal && <RecieptModal setModal={setModal} /> }
      <Dessserts setModal={setModal} />
    </ShopcontextProvider>
    
 
  )
}

export default App