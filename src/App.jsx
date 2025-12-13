import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Pedidos from "./pages/Pedidos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route exact path="/pedidos" element={<Pedidos />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
