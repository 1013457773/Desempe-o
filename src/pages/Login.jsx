import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/Auth.css";
import logo from '../imagenes/login.jpg'; // Importa la imagen

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="form-box">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={logo} 
          alt="Logo de la marca"
          style={{ width: "150px" }} 
        />
      </div>
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
