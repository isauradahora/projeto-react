
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from '../../projeto-react/src/components/Menu'
import Footer from '../../projeto-react/src/components/Footer/Footer'
import Sobre from '../../projeto-react/src/pages/Sobre'
import Comentarios from '../../projeto-react/src/pages/Comentarios'
import Contato from '../../projeto-react/src/pages/Contato'
import Home from '../../projeto-react/src/pages/Home/Home'


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
