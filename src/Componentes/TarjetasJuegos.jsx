import Swal from "sweetalert2";
import "./TarjetasJuegos.css";

function TarjetaJuego({ juego, alEliminar, alEditar }) {
  const confirmarEliminacion = async () => {
    const confirmacion = await Swal.fire({
      title: "¿Eliminar videojuego?",
      text: `Esta acción eliminará "${juego.titulo}" de forma permanente.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#e53e3e",
      cancelButtonColor: "#718096",
    });

    if (confirmacion.isConfirmed) {
      alEliminar(juego.id);
    }
  };

  return (
    <div className="card-juego">
      <div>
        <h2>{juego.titulo}</h2>
        <p>
          <strong>🎮 Género:</strong> {juego.genero}
        </p>
        <p>
          <strong>💰 Precio:</strong> ${juego.precio}
        </p>
        <p>
          <strong>📅 Fecha:</strong> {juego.fecha}
        </p>
      </div>

      <div className="acciones">
        <button onClick={() => alEditar(juego)} className="editar">
          ✏️ Editar
        </button>
        <button onClick={confirmarEliminacion} className="eliminar">
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

export default TarjetaJuego;
