import { useState } from "react";
import Rotas from "./Rotas/Rotas";


function App() {
  const [news, setNews] = useState([])

  return (
    <>
    <Rotas news={news} setNews={setNews}/>
    </>
  );
}

export default App;