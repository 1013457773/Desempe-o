import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usarAutenticacion } from "../Contexto/Autenticacion";
import Swal from "sweetalert2";

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
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-900">
      <form
        onSubmit={manejarEnvio}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">
          Iniciar Sesión Gamer 🎮
        </h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-900 transition"
        >
          Entrar
        </button>
        <p className="text-center mt-4">
          ¿No tienes cuenta?{" "}
          <Link
            to="/registro"
            className="text-purple-700 underline hover:text-purple-900"
          >
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}

export default InicioSesion;
