import { useEffect, useState } from "react";
import { obtenerVideojuegos, eliminarVideojuego } from "../Servicios/Api";
import TarjetaJuego from "../Componentes/TarjetasJuegos";
import FormularioJuego from "../Componentes/FormularioJuego";
import { usarAutenticacion } from "../Contexto/Autenticacion";
import Swal from "sweetalert2";

function PanelPrincipal() {
  const [juegos, setJuegos] = useState([]);
  const [juegoEditando, setJuegoEditando] = useState(null);
  const { cerrarSesion } = usarAutenticacion();

  useEffect(() => {
    cargarJuegos();
  }, []);

  const cargarJuegos = async () => {
    const data = await obtenerVideojuegos();
    setJuegos(data);
  };

  const manejarEliminar = async (id) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esto eliminará el videojuego.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });

    if (confirmacion.isConfirmed) {
      await eliminarVideojuego(id);
      cargarJuegos();
      Swal.fire("Eliminado", "El videojuego fue eliminado.", "success");
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-800">
          🎮 Mis Videojuegos
        </h1>
        <button
          onClick={cerrarSesion}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Cerrar sesión
        </button>
      </div>

      <FormularioJuego
        alGuardar={cargarJuegos}
        juegoEditando={juegoEditando}
        setJuegoEditando={setJuegoEditando}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {juegos.map((juego) => (
          <TarjetaJuego
            key={juego.id}
            juego={juego}
            alEliminar={manejarEliminar}
            alEditar={setJuegoEditando}
          />
        ))}
      </div>
    </div>
  );
}

export default PanelPrincipal;
