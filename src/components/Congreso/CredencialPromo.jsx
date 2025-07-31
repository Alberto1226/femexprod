import React from "react";
import logoFEMEXPROD from "../../assets/img/20.png";
import promoBadge from "../../assets/congreso/promo.png";

const CredencialPromo = () => {
  return (
    <section className="credencial-promo">
      {/* Título */}
      <h2 className="promo-titulo">Llévate tu Credencial Gratis</h2>

      {/* Contenido principal */}
      <div className="promo-contenido">
        {/* Tarjeta FEMEXPROD */}
        <div className="promo-card">
          <img
            src={logoFEMEXPROD}
            alt="Credencial FEMEXPROD"
            className="promo-logo"
          />
          <p className="FEMEX">FEMEXPROD®</p>
          <p className="vigencia">Vigencia Agosto 2026</p>
        </div>

        {/* Imagen Badge como pin */}
        <img src={promoBadge} alt="Super Promo" className="promo-pin" />
      </div>

      {/* Texto informativo */}
      <div className="promo-texto">
        <p>
          Si pagas tu boleto para San Juan del Río 2026 recibe{" "}
          <strong>GRATIS</strong> tu credencial FEMEXPROD.
        </p>
        <p>
          Precios de Promoción solo durante este congreso <strong>Tlaxcala 2025</strong>
        </p>

        <ul className="promo-precios">
          <li>General: $1,000.00</li>
          <li>Estudiante: $800.00</li>
          <li>Reembolso de $200.00 en el área comercial</li>
        </ul>
      </div>
    </section>
  );
};

export default CredencialPromo;
