import { useEffect, useRef } from "react";
import "./sponsors.css";

// Importa todas las imágenes
import cadCam from "../../assets/img/sponsors/CadCam.png";
import loroDent from "../../assets/img/sponsors/LoroDent.png";
import codent from "../../assets/img/sponsors/codent.png";
import protodent from "../../assets/img/sponsors/protodent.png";
import elic from "../../assets/img/sponsors/elic.png";
import inovadent from "../../assets/img/sponsors/innovadent.png";
import amyd from "../../assets/img/sponsors/amyd.png";
import digiflex from "../../assets/img/sponsors/digiflex.png";
import tcs from "../../assets/img/sponsors/tcs.png";
import k9 from "../../assets/img/sponsors/1.jpeg";
import smart from "../../assets/img/sponsors/smart.jpeg";
import bio from "../../assets/img/sponsors/Bio.jpeg";
import r from "../../assets/img/sponsors/r.jpeg";
import flex from "../../assets/img/sponsors/flex.jpeg";
// Agrega las demás imágenes aquí

const Patrocinadores = () => {
  const sponsors = [
    cadCam,
    loroDent,
    codent,
    protodent,
    elic,
    inovadent,
    amyd,
    digiflex,
    tcs,
    k9,
    smart,
    bio,
    r,
    flex,
    // ... el resto de los logos importados
  ];

  return (
    <>
      <section className="preregistro-congreso">
        <div className="header-curvo-preregistro">
          <h2 className="titulo-preregistro">Patrocinadores</h2>
        </div>
      <div className="sponsors-grid">
        {sponsors.map((img, index) => (
          <div key={index} className="sponsor-item">
            <img src={img} alt={`sponsor-${index}`} />
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

export default Patrocinadores;
