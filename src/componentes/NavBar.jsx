import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-title">
        <h1>Home</h1>
      </Link>
      <Link to="/servicios" className="btn espacio-grande">
        <h1>Servicios</h1>
      </Link>
      <Link to="/contacto" className="btn espacio-grande">
        <h1>Contacto</h1>
      </Link>
      <Link to="/acerca-de" className="btn espacio-grande">
        <h1>Acerca de</h1>
      </Link>
      <Link to="/" className="btn espacio-grande" onClick={cerrarSesion}>
        <h1>Cerrar Sesión</h1>
      </Link>
    </nav>
  );
}
