import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../../assets/img/l1.png";
import imgMision from "../../assets/img/9.png";

const MisionVision = ({ info }) => {
  return (
    <section className="mision-container">
      <Helmet>
        <title>Misión y Visión - FEMEXPROD</title>
        <meta
          name="description"
          content="Nuestra misión y visión: liderazgo en la prótesis dental mexicana y compromiso con la excelencia y la innovación."
        />
      </Helmet>

      {/* Imagen izquierda */}
      <div className="mision-imagen">
        <img src={imgMision} alt="Misión y Visión" />
      </div>

      {/* Texto derecha */}
      <div className="mision-texto">
        <img src={logo} alt="Logo FEMEXPROD" className="logo-mision" />
        <h2>
          <span className="azul">Misión y Visión de FEMEXPROD</span> 
        </h2>

        {/* Misión */}
        <div className="bloque-mision">
          <div className="icono verde">
            <i className="fas fa-heart-pulse"></i>
          </div>
          <div>
            <h3 className="mision">Misión</h3>
            <p>{info.mision}</p>
          </div>
        </div>

        {/* Visión */}
        <div className="bloque-vision">
          <div className="icono azul">
            <i className="fas fa-notes-medical"></i>
          </div>
          <div>
            <h3 className="mision">Visión</h3>
            <p>{info.vision}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MisionVision;
