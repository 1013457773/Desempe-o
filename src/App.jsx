import { Routes, Route, Navigate } from "react-router-dom";
import InicioSesion from "./Pages/Inicio";
import PanelPrincipal from "./Pages/PanelPrincipal";
import RutaProtegida from "./Componentes/RutasProtegida";
import { ProveedorAutenticacion } from "./Contexto/Autenticacion";
import Registro from "./Pages/Registro";

function App() {
  return (
    <ProveedorAutenticacion>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />{" "}
        <Route
          path="/panel"
          element={
            <RutaProtegida>
              <PanelPrincipal />
            </RutaProtegida>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ProveedorAutenticacion>
  );
}

export default App;
