import React from "react";
import { Helmet } from "react-helmet-async";

// Imagen superior
import imgValores from "../../assets/img/10.png";
import logo from "../../assets/img/l1.png";

const Valores = ({ info }) => {
  return (
    <section className="valores-container">
      <Helmet>
        <title>Valores de FEMEXPROD</title>
        <meta
          name="description"
          content="Valores de FEMEXPROD: excelencia, ética, innovación, unidad, compromiso social y profesionalismo."
        />
      </Helmet>

      {/* Imagen superior con título */}
      <div className="valores-header">
        <img src={imgValores} alt="Valores FEMEXPROD" />
        <div className="overlay-text">
          <img src={logo} alt="Logo FEMEXPROD" className="logo-valores" />
          <h2>Valores de FEMEXPROD</h2>
        </div>
      </div>

      {/* Caja inferior con lista de valores */}
      <div className="valores-box">
        <p className="intro">
          En <strong>FEMEXPROD</strong>, nuestros pilares son:
        </p>
        <ul className="valores-lista">
          {info.map((valor, index) => (
            <li key={index} className="valor-item">
              <div className="valor-icono">
                <i className="fas fa-check"></i>
              </div>
              <span className="valor-texto">{valor}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default Valores;
