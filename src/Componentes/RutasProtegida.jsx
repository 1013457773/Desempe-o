import { Navigate } from "react-router-dom";
import { usarAutenticacion } from "../Contexto/Autenticacion";

function RutaProtegida({ children }) {
  const { usuario } = usarAutenticacion();
  if (!usuario) return <Navigate to="/" />;
  return children;
}

export default RutaProtegida;
