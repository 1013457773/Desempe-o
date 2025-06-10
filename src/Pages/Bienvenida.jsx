import { useNavigate } from "react-router-dom";
import "./Bienvenida.css";

function Bienvenida() {
  const navegar = useNavigate();

  const manejarClick = () => {
    navegar("/");
  };

  return (
    <div className="bienvenida-container">
      <div className="bienvenida-overlay">
        <h1 className="bienvenida-titulo">🎮 ZONA GAMER</h1>
        <p className="bienvenida-subtitulo">
          ¡Bienvenido al centro de videojuegos!
        </p>
        <button onClick={manejarClick} className="bienvenida-boton">
          Empezar 🚀
        </button>
      </div>
    </div>
  );
}

export default Bienvenida;
