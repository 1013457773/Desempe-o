import React from "react";
import NavBar from "../componentes/NavBar";

const Home = ({ setIsLoggedIn }) => {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="contenido">
        <h1>Bienvenido al Home</h1>
        <p>Contenido de la página de Home...</p>
      </div>
    </div>
  );
};

export default Home;
