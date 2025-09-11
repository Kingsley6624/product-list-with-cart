import React, { useState } from "react";
import Dessserts from "./components/Dessserts";
import { ShopContextProvider } from "./context/ShopContext";
import RecieptModal from "./components/RecieptModal";

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <ShopContextProvider>
      {modal && <RecieptModal setModal={setModal} />}
      <Dessserts setModal={setModal} />
    </ShopContextProvider>
  );
};

export default App;
