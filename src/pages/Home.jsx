import React from "react";
import NavBar from "../componentes/NavBar";
import tu_imagen from "../imagenes/login.jpg";


const Home = ({ setIsLoggedIn }) => {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="contenido">
        {/* Usa la imagen importada */}
        <img 
          src={tu_imagen} 
          alt="Imagen destacada" 
          className="banner-img"
        />
        <h1>Bienvenido al Home</h1>
        <p>Contenido de la página de Home...</p>
      </div>
    </div>
  );
};

export default Home;
