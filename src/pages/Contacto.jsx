import React from "react";
import NavBar from "../componentes/NavBar";

const Contacto = ({ setIsLoggedIn }) => {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="contenido">
        <h1>Contacto</h1>
        <p>¡Estamos aquí para ayudarte! Por favor, completa el formulario de contacto.</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre completo" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Tu correo electrónico" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              placeholder="Escribe tu mensaje aquí"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
