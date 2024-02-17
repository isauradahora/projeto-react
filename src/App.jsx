
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from '..//src/components/Menu'
import Footer from '../src/components/Footer/Footer'
import Sobre from '../src/pages/Sobre'
import Comentarios from '../src/pages/Comentarios'
import Contato from '../src/pages/Contato'
import Home from '../src/pages/Home/Home'


function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
