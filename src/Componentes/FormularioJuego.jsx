import { useState, useEffect } from "react";
import { crearVideojuego, actualizarVideojuego } from "../Servicios/Api";
import Swal from "sweetalert2";

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
    <form onSubmit={manejarEnvio} className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-4 text-purple-700">
        {juegoEditando ? "Editar Videojuego" : "Agregar Nuevo Videojuego"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="titulo"
          placeholder="Título"
          value={formulario.titulo}
          onChange={manejarCambio}
          className="p-2 border rounded"
          required
        />
        <input
          name="genero"
          placeholder="Género"
          value={formulario.genero}
          onChange={manejarCambio}
          className="p-2 border rounded"
          required
        />
        <input
          name="precio"
          placeholder="Precio"
          type="number"
          value={formulario.precio}
          onChange={manejarCambio}
          className="p-2 border rounded"
          required
        />
        <input
          name="fecha"
          placeholder="Fecha"
          type="date"
          value={formulario.fecha}
          onChange={manejarCambio}
          className="p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900"
      >
        {juegoEditando ? "Guardar Cambios" : "Agregar Juego"}
      </button>
    </form>
  );
}

export default FormularioJuego;
