import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Acerca from "../pages/Acerca";
import NavBar from "../componentes/NavBar"; // Si tienes un NavBar visible en cada página

function AppRouter({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Router>
      {isLoggedIn && <NavBar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca-de" element={<Acerca />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
