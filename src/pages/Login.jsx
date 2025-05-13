import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulamos login, si es correcto, redirige a Home
    navigate("/home");
  };

  return (
    <div className="form-box">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit" className="submit-btn">
          Iniciar Sesión
        </button>
      </form>
      <p>
        <Link to="/registro">¿No tienes una cuenta?</Link>
      </p>
    </div>
  );
}
