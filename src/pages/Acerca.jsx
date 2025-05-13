import React from "react";
import NavBar from "../componentes/NavBar";

const AcercaDe = ({ setIsLoggedIn }) => {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="contenido">
        <h1>Acerca de</h1>
        <p>Contenido sobre la aplicación o empresa...</p>
      </div>
    </div>
  );
};

export default AcercaDe;
