import React from "react";
import NavBar from "../componentes/NavBar";
import imgEquipo1 from "../imagenes/4.jpg";
import imgEquipo2 from "../imagenes/5.jpg";

import "../styles/AcercaDe.css";

const tarjetas = [
  { titulo: "Historia", contenido: "Fundados en [año], dedicados al servicio." },
  { titulo: "Misión", contenido: "Soluciones innovadoras y de calidad." },
  { titulo: "Visión", contenido: "Liderar con excelencia y valores." },
];

const equipo = [
  { nombre: "Nombre 1", cargo: "Cargo", foto: imgEquipo1 },
  { nombre: "Nombre 2", cargo: "Cargo", foto: imgEquipo2 },
];

export default function AcercaDe({ setIsLoggedIn }) {
  return (
    <div className="main-container">
      <NavBar setIsLoggedIn={setIsLoggedIn} />

      <div className="contenido">
        <h1>Acerca de Nosotros</h1>

        <div className="cards-container">
          {tarjetas.map((t) => (
            <div key={t.titulo} className="card">
              <h2>{t.titulo}</h2>
              <p>{t.contenido}</p>
            </div>
          ))}
        </div>

        <div className="card team-card">
          <h2>Equipo</h2>
          <div className="team-container">
            {equipo.map((m) => (
              <div key={m.nombre} className="team-member">
                <img src={m.foto} alt={m.nombre} />
                <h3>{m.nombre}</h3>
                <p>{m.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
