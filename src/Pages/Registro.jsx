import { useState } from "react";
import { registrarUsuario } from "../Servicios/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Registro.css";

function Registro() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navegar = useNavigate();

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const nuevoUsuario = { email: correo, password: contrasena };

    try {
      await registrarUsuario(nuevoUsuario);
      Swal.fire("¡Éxito!", "Usuario registrado correctamente", "success");
      navegar("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-formulario">
        <div className="registro-ilustracion"></div>

        <form onSubmit={manejarEnvio} className="registro-formulario-contenido">
          <h2 className="registro-titulo">📝 Crear cuenta gamer</h2>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />

          <button type="submit" className="boton-registro">
            Registrarme
          </button>

          <p className="registro-enlace">
            ¿Ya tienes cuenta? <a href="/">Inicia sesión 🔐</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registro;
