import { useEffect, useState } from "react";
import { obtenerVideojuegos, eliminarVideojuego } from "../Servicios/Api";
import TarjetaJuego from "../Componentes/TarjetasJuegos";
import FormularioJuego from "../Componentes/FormularioJuego";
import { usarAutenticacion } from "../Contexto/Autenticacion";
import Swal from "sweetalert2";
import "./PanelPrincipal.css";

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
    <div className="panel-container">
      <div className="panel-header">
        <h1>🎮 Mis Videojuegos</h1>
        <button className="boton-cerrar-sesion" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </div>

      <FormularioJuego
        alGuardar={cargarJuegos}
        juegoEditando={juegoEditando}
        setJuegoEditando={setJuegoEditando}
      />

      <div className="grid-juegos">
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
