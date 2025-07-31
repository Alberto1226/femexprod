import React from "react";
import { Helmet } from "react-helmet-async";

// Logo del congreso
import congresoLogo from "../../assets/img/19.png";

const InvitacionCongreso = () => {
  return (
    <section className="invitacion-congreso">
      <Helmet>
        <title>Invitación Congreso FEMEXPROD 2026</title>
        <meta
          name="description"
          content="Invitación oficial al LII Congreso Nacional de FEMEXPROD en San Juan del Río, Querétaro."
        />
      </Helmet>

      {/* Encabezado */}
      <div className="header-invitacion">
        <img
          src={congresoLogo}
          alt="Congreso Nacional"
          className="logo-congreso grande"
        />
        <h3 className="frase-script">Esto es lo que nos impulsa</h3>
      </div>

      {/* Cuerpo del texto */}
      <div className="cuerpo-invitacion">
        <p className="intro">
          Estimado/a colega y profesional de la prótesis dental:
        </p>

        <p className="texto">
          La Federación Mexicana de Protesistas Dentales
          (FEMEXPROD) tiene el honor de invitarte a nuestro 
          <strong> Quincuagesimo Segundo Congreso Anual </strong>, que se llevará a cabo los días
          <strong> 31 de Julio y 01 de Agosto del 2026</strong>, en el vibrante y
          colonial <strong>San Juan del Río, Querétaro</strong>.
        </p>

        <p className="texto">
          Bajo el lema{" "}
          <strong>
            "De lo Convencional a lo Digital"
          </strong>
          , este congreso promete ser una experiencia transformadora. Hemos
          preparado un programa de primer nivel con ponentes nacionales e
          internacionales que compartirán los avances más recientes, las
          técnicas de vanguardia y las soluciones más innovadoras que están
          revolucionando nuestra profesión.
        </p>

        <p className="texto">
          Tendrás la oportunidad de participar en talleres interactivos, explorar
          la exposición comercial con las últimas tecnologías y materiales, y lo
          más importante, conectar con colegas, intercambiar conocimientos y
          fortalecer lazos dentro de nuestra valiosa comunidad.
        </p>

        <p className="texto">
          Te esperamos para juntos seguir elevando el nivel de nuestra profesión.
        </p>

        <p className="firma">
          Atentamente: <br />
          <span className="firma-script">Asociación de Técnicos Protesistas Dentales del Estado de Querétaro A.C.</span>
        </p>
      </div>

    </section>
  );
};

export default InvitacionCongreso;
