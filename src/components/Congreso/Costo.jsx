import React from "react";
import { Helmet } from "react-helmet-async";
import logoCongreso from "../../assets/img/18.png"; // Logo del Congreso

const CongresoPrecios = () => {
  return (
    <section className="congreso-precios">
      <Helmet>
        <title>Congreso FEMEXPROD - Precios</title>
        <meta
          name="description"
          content="Descubre los precios y beneficios del Congreso FEMEXPROD 2026."
        />
      </Helmet>

      {/* Texto caligráfico arriba */}
      <div className="texto-caligrafico">
        <p>
          Descubre las últimas innovaciones, conéctate con líderes del sector y
          lleva tu práctica al siguiente nivel.
        </p>
        <p>¡No te quedes fuera!</p>
      </div>

      {/* Sección de precios */}
      <div className="precios">
        <h3>PRECIOS:</h3>
        <p className="precio-general">GENERAL: $1,200.00</p>
        <p className="precio-estudiante">ESTUDIANTE: $1,000.00</p>
        <p className="reembolso">
          REEMBOLSO DE $200.00 EN EL ÁREA COMERCIAL
        </p>
      </div>

      {/* Bloque azul curvo con logo */}
      <div className="bloque-azul">
        <img src={logoCongreso} alt="Logo Congreso" className="logo-congreso" />
      </div>
    </section>
  );
};

export default CongresoPrecios;
