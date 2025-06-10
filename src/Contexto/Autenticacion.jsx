import { createContext, useContext, useState } from "react";
import { obtenerUsuarios } from "../Servicios/Api";

const ContextoAutenticacion = createContext();

export function ProveedorAutenticacion({ children }) {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = async (correo, contrasena) => {
    const usuarios = await obtenerUsuarios();
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === correo && u.password === contrasena
    );
    if (usuarioEncontrado) {
      setUsuario(usuarioEncontrado);
      return true;
    }
    return false;
  };

  const cerrarSesion = () => setUsuario(null);

  return (
    <ContextoAutenticacion.Provider
      value={{ usuario, iniciarSesion, cerrarSesion }}
    >
      {children}
    </ContextoAutenticacion.Provider>
  );
}

export function usarAutenticacion() {
  return useContext(ContextoAutenticacion);
}
