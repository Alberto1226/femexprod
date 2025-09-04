import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

import AcercaDe from "./AcercaDe";
import Objetivo from "./Objetivo";
import MisionVision from "./MisionVision";
import Valores from "./Valores";
import femexprodData from "../../assets/data/femexprod.json";

// Imágenes
import logo from "../../assets/img/logo.png";
import imgFill from "../../assets/img/2.png";
import Contactanos from "./Contactanos";
import Congreso from "../Congreso/Congreso";
import InvitacionCongreso from "../Congreso/InvitacionCongreso";
import HotelCongreso from "../Congreso/HotelCongreso";
import CongresoPrecios from "../Congreso/Costo";
import RegistroCongreso from "../Congreso/Redes";
import PreRegistroCongreso from "../Congreso/PreRegistroCongreso";
import FooterCongreso from "./footer";
import CredencialPromo from "../Congreso/CredencialPromo";
import Patrocinadores from "../Congreso/Patrocinadores";
import Eventos from "../Congreso/Eventos";
import Areas from "../Congreso/Espacion";

const FemexprodPage = () => {
  const [data, setData] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    // Bloquear scroll del body al abrir
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : original || "";
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [menuOpen]);

  useEffect(() => {
    // Cerrar con ESC
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const smoothScrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    // Dar un pequeño margen para que cierre el panel y luego hacer scroll
    setTimeout(() => smoothScrollTo(hash), 50);
  };

  useEffect(() => {
    setData(femexprodData.femexprod);
  }, []);

  if (!data) return <div>Cargando información...</div>;

  // Función para hacer scroll a la sección
  const scrollToCongreso = () => {
    const section = document.getElementById("congreso");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Helmet>
        <title>FEMEXPROD - Federación Mexicana de Protesistas Dentales</title>
        <meta
          name="description"
          content="Página oficial de FEMEXPROD: información sobre la federación, misión, visión y valores para la salud bucal en México."
        />
      </Helmet>

     {/* Botón hamburguesa (arriba derecha) */}
<button
        className="hamburger-btn"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? (
          // Ícono X
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.41L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4z"/>
          </svg>
        ) : (
          // Ícono menú hamburguesa
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M3 6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm18 5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2zm0 7H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/>
          </svg>
        )}
      </button>


{/* Overlay */}
{menuOpen && <div className="hamburger-overlay" onClick={() => setMenuOpen(false)} />}

{/* Panel lateral (desde la derecha) */}
<nav
  className={`hamburger-panel right ${menuOpen ? "open" : ""}`}
  aria-hidden={!menuOpen}
>
  <button
    className="hamburger-close"
    aria-label="Cerrar menú"
    onClick={() => setMenuOpen(false)}
  >
    ✕
  </button>

  <ul className="hamburger-menu-list">
    <li><a href="#acerca"         onClick={(e)=>handleNavClick(e,"#acerca")}>Acerca</a></li>
    <li><a href="#objetivo"       onClick={(e)=>handleNavClick(e,"#objetivo")}>Objetivo</a></li>
    <li><a href="#mision"         onClick={(e)=>handleNavClick(e,"#mision")}>Misión y Visión</a></li>
    <li><a href="#valores"        onClick={(e)=>handleNavClick(e,"#valores")}>Valores</a></li>
    <li><a href="#contacto"       onClick={(e)=>handleNavClick(e,"#contacto")}>Contáctanos</a></li>
    <li><a href="#congreso"       onClick={(e)=>handleNavClick(e,"#congreso")}>Congreso</a></li>
    <li><a href="#invitacion"     onClick={(e)=>handleNavClick(e,"#invitacion")}>Invitación</a></li>
    {/* <li><a href="#hotel"        onClick={(e)=>handleNavClick(e,"#hotel")}>Hotel</a></li> */}
    <li><a href="#precios"        onClick={(e)=>handleNavClick(e,"#precios")}>Precios</a></li>
    <li><a href="#redes"          onClick={(e)=>handleNavClick(e,"#redes")}>Redes</a></li>
    <li><a href="#preregistro"    onClick={(e)=>handleNavClick(e,"#preregistro")}>Pre-Registro</a></li>
    <li><a href="#eventos"        onClick={(e)=>handleNavClick(e,"#eventos")}>Eventos</a></li>
    <li><a href="#areas"          onClick={(e)=>handleNavClick(e,"#areas")}>Áreas</a></li>
    <li><a href="#patrocinadores" onClick={(e)=>handleNavClick(e,"#patrocinadores")}>Patrocinadores</a></li>
  </ul>
</nav>

      {/* HERO */}
      <div className="hero-section">
        <div className="hero-left">
          <img src={logo} alt="FEMEXPROD" className="logo" />
          <div className="hero-slogan">
            Impulsando la prótesis dental en México
          </div>
          <a href="https://www.femexprod.com.mx" className="hero-link">
            www.femexprod.com.mx <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div
          className="hero-right"
          style={{
            backgroundImage: `url(${imgFill})`,
          }}
        ></div>
      </div>

      {/* Secciones dinámicas con animación */}
      <Fade triggerOnce direction="up" duration={800}>
        <div id="acerca" className="section">
          <AcercaDe info={data.acerca_de} />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={200}>
        <div id="objetivo" className="section">
          <Objetivo info={data.objetivo} />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={400}>
        <div id="mision" className="section">
          <MisionVision info={data.mision_y_vision} />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={600}>
        <div id="valores" className="section">
          <Valores info={data.valores} />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="contacto" className="section">
          <Contactanos />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="congreso" className="section">
          <Congreso />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="invitacion" className="section">
          <InvitacionCongreso />
        </div>
      </Fade>

      {/* <Fade triggerOnce direction="up" duration={800} delay={1400}>
                <div id="hotel" className="section"><HotelCongreso /></div>
            </Fade> */}

      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="precios" className="section">
          <CongresoPrecios />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="redes" className="section">
          <RegistroCongreso />
        </div>
      </Fade>

      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="preregistro" className="section">
          <PreRegistroCongreso />
        </div>
      </Fade>

      {/* <Fade triggerOnce direction="up" duration={800} delay={2000}>
                <div id="promo" className="section"><CredencialPromo /></div>
            </Fade> */}

      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="eventos" className="section mb-4">
          <Eventos />
        </div>
      </Fade>
      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="areas" className="section">
          <Areas />
        </div>
      </Fade>
      <Fade triggerOnce direction="up" duration={800} delay={800}>
        <div id="patrocinadores" className="section">
          <Patrocinadores />
        </div>
      </Fade>

      <FooterCongreso />

      {/* Botón flotante */}
      {/* Botón flotante mejorado */}
      {/* <button className="btn-congreso" onClick={scrollToCongreso}>
        <i className="fas fa-calendar-alt"></i> Congreso Nacional 2026
      </button> */}
    </div>
  );
};

export default FemexprodPage;
