import { useNavigate, Link } from "react-router-dom"; // ← aquí ya está bien
import "../styles/Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Después de registrar, redirige al Login
    navigate("/login");
  };

  return (
    <div className="form-box">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <button type="submit" className="submit-btn">
          Registrarse
        </button>
        <p>
          <Link to="/login">¿Ya tienes una cuenta?</Link>
        </p>
      </form>
    </div>
  );
}
