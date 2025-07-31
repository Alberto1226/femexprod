import React from "react";
import { Helmet } from "react-helmet-async";

// Importa imágenes
import logo from "../../assets/img/20.png";
import imgDientes from "../../assets/img/3.png";
import imgSenor from "../../assets/img/4.png";

const AcercaDe = ({ info }) => {
  return (
    <section className="acerca-container">
      <Helmet>
        <title>Acerca de FEMEXPROD</title>
        <meta
          name="description"
          content="Conoce la Federación Mexicana de Protesistas Dentales (FEMEXPROD) y su compromiso con la salud bucal en México."
        />
      </Helmet>

      {/* Columna izquierda: texto */}
      <div className="acerca-texto">
        <img src={logo} alt="FEMEXPROD" className="acerca-logo" />
        <h2>
          <span className="azul">Acerca de</span><br />
          <span className="verde">FemexProd</span>
        </h2>
        <h3 className="bienvenida">¡Bienvenidos a FEMEXPROD!</h3>
        <p>{info.descripcion}</p>
      </div>

      {/* Columna derecha: collage vertical */}
      <div className="acerca-imagenes">
        <img src={imgDientes} alt="Prótesis dental" className="img-superior" />
        <img src={imgSenor} alt="Técnico dental" className="img-inferior" />
        <div className="caja-bajada">
          Profesionales unidos por la salud bucal
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
