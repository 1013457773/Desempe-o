import { Routes, Route, Navigate } from "react-router-dom";
import InicioSesion from "./Pages/Inicio";
import Registro from "./Pages/Registro";
import PanelPrincipal from "./Pages/PanelPrincipal";
import Bienvenida from "./Pages/Bienvenida";
import RutaProtegida from "./Componentes/RutasProtegida";
import { ProveedorAutenticacion } from "./Contexto/Autenticacion";

function App() {
  return (
    <ProveedorAutenticacion>
      <Routes>
        <Route path="/inicio" element={<Bienvenida />} />
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/panel"
          element={
            <RutaProtegida>
              <PanelPrincipal />
            </RutaProtegida>
          }
        />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </ProveedorAutenticacion>
  );
}

export default App;
