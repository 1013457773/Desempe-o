import React from "react";
import NavBar from "../componentes/NavBar";

const Servicios = ({ setIsLoggedIn }) => {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="contenido">
        <h1>Servicios</h1>
        <p>Contenido de la página de servicios...</p>
      </div>
    </div>
  );
};

export default Servicios;
