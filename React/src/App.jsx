import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SobreNos from "./Pages/SobreNos"
import Carrinho from "./Pages/Carrinho"
import Login from "./Pages/Login"
import OndeEstamos from "./Pages/OndeEstamos"
import Produtos from "./Pages/Produtos"
import Servicos from "./Pages/Servicos"

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SobreNos" element={<SobreNos />}/>
          <Route path="/Carrinho" element={<Carrinho />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/OndeEstamos" element={<OndeEstamos />}/>
          <Route path="/Produtos" element={<Produtos />}/>
          <Route path="/Servicos" element={<Servicos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App