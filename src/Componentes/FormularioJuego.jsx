import { useState, useEffect } from "react";
import { crearVideojuego, actualizarVideojuego } from "../Servicios/Api";
import Swal from "sweetalert2";
import "./FormularioJuego.css";

function FormularioJuego({ alGuardar, juegoEditando, setJuegoEditando }) {
  const [formulario, setFormulario] = useState({
    titulo: "",
    genero: "",
    precio: "",
    fecha: "",
  });

  useEffect(() => {
    if (juegoEditando) {
      setFormulario(juegoEditando);
    }
  }, [juegoEditando]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      if (juegoEditando) {
        await actualizarVideojuego(juegoEditando.id, formulario);
        Swal.fire(
          "Editado",
          "El videojuego ha sido actualizado correctamente.",
          "success"
        );
      } else {
        await crearVideojuego(formulario);
        Swal.fire(
          "Agregado",
          "Nuevo videojuego registrado con éxito.",
          "success"
        );
      }

      setFormulario({ titulo: "", genero: "", precio: "", fecha: "" });
      setJuegoEditando(null);
      alGuardar();
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario-juego">
      <h3>
        {juegoEditando ? "✏️ Editar Videojuego" : "🕹️ Agregar Nuevo Videojuego"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="titulo"
          placeholder="🎮 Título"
          value={formulario.titulo}
          onChange={manejarCambio}
          required
        />
        <input
          name="genero"
          placeholder="🎭 Género"
          value={formulario.genero}
          onChange={manejarCambio}
          required
        />
        <input
          name="precio"
          placeholder="💸 Precio"
          type="number"
          value={formulario.precio}
          onChange={manejarCambio}
          required
        />
        <input
          name="fecha"
          placeholder="📅 Fecha de lanzamiento"
          type="date"
          value={formulario.fecha}
          onChange={manejarCambio}
          required
        />
      </div>

      <button type="submit">
        {juegoEditando ? "💾 Guardar Cambios" : "➕ Agregar Juego"}
      </button>
    </form>
  );
}

export default FormularioJuego;
