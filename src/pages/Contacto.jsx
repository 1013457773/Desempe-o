import React from "react";
import NavBar from "../componentes/NavBar";

const Contacto = ({ setIsLoggedIn }) => {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="contenido">
        <h1>Contacto</h1>
        <p>Contenido de la página de contacto...</p>
      </div>
    </div>
  );
};

export default Contacto;
