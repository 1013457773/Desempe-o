import Swal from "sweetalert2";

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
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full border border-purple-200">
      <div>
        <h2 className="text-xl font-bold text-purple-700 mb-2">
          {juego.titulo}
        </h2>
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

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => alEditar(juego)}
          className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
        >
          ✏️ Editar
        </button>
        <button
          onClick={confirmarEliminacion}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

export default TarjetaJuego;
