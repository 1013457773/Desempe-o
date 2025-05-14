import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaIdBadge, FaEnvelope } from "react-icons/fa";
import "../styles/Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="form-box">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <div className="input-icon-wrapper">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Usuario" required />
        </div>
        <div className="input-icon-wrapper">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Contraseña" required />
        </div>
        <div className="input-icon-wrapper">
          <FaIdBadge className="input-icon" />
          <input type="text" placeholder="Nombre" required />
        </div>
        <div className="input-icon-wrapper">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Correo" required />
        </div>
        <button type="submit" className="submit-btn">Registrarse</button>
        <p>
          <Link to="/login">¿Ya tienes una cuenta?</Link>
        </p>
      </form>
    </div>
  );
}
