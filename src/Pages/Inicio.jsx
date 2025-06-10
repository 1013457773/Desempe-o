import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usarAutenticacion } from "../Contexto/Autenticacion";
import Swal from "sweetalert2";
import "./Inicio.css";

function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { iniciarSesion } = usarAutenticacion();
  const navegar = useNavigate();

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const exito = await iniciarSesion(correo, contrasena);
    if (exito) {
      navegar("/panel");
    } else {
      Swal.fire("Error", "Credenciales incorrectas", "error");
    }
  };

  return (
    <div className="inicio-container">
      <div className="inicio-formulario">
        <div className="inicio-ilustracion"></div>

        <form onSubmit={manejarEnvio} className="inicio-formulario-contenido">
          <h2 className="inicio-titulo">🎮 Iniciar Sesión Gamer</h2>

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

          <button type="submit" className="boton-acceso">
            Entrar al mundo
          </button>

          <p className="inicio-enlace">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí 💾</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default InicioSesion;
