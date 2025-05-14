import React from "react";
import NavBar from "../componentes/NavBar";
import servicio1Img from "../imagenes/1.jpg"; 
import servicio2Img from "../imagenes/2.jpg"; 
import servicio3Img from "../imagenes/3.jpg"; 

const serviciosData = [
  {
    id: 1,
    nombre: "Fotografía de Bodas",
    descripcion: "Capturamos los momentos más especiales de tu día con imágenes únicas y emotivas.",
    imagen: servicio1Img
  },
  {
    id: 2,
    nombre: "Cumpleaños Personalizados",
    descripcion: "Haz de tu cumpleaños un evento inolvidable con una sesión de fotos temática.",
    imagen: servicio2Img
  },
  {
    id: 3,
    nombre: "Retratos Profesionales",
    descripcion: "Crea una imagen profesional con nuestras sesiones de retratos de alta calidad.",
    imagen: servicio3Img
  },
];

const Servicios = ({ setIsLoggedIn }) => {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="contenido">
        <h1>Servicios</h1>
        <div className="servicios-lista">
          {serviciosData.map((servicio) => (
            <div key={servicio.id} className="servicio-item">
              <img src={servicio.imagen} alt={servicio.nombre} className="servicio-imagen" />
              <h2>{servicio.nombre}</h2>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
