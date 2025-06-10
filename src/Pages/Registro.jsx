import { useState } from "react";
import { registrarUsuario } from "../Servicios/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-indigo-900">
      <form
        onSubmit={manejarEnvio}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
          Crear cuenta 📝
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
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-900"
        >
          Registrarme
        </button>

        <p className="text-center mt-4">
          ¿Ya tienes cuenta?{" "}
          <a
            href="/"
            className="text-purple-700 underline hover:text-purple-900"
          >
            Inicia sesión
          </a>
        </p>
      </form>
    </div>
  );
}

export default Registro;
