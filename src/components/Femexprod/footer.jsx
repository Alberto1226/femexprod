import React from "react";
import logoCongreso from "../../assets/congreso/1.png"; // Logo del congreso

const FooterCongreso = () => {
    return (
        <footer className="footer-congreso">
            {/* Curva superior */}
            <div className="footer-curvo">
                <div className="footer-content">
                    {/* Logo */}
                    <div className="footer-logo">
                        <img src={logoCongreso} alt="Congreso FEMEXPROD" />
                        <p>LII Congreso Nacional FEMEXPROD</p>
                    </div>

                    {/* Navegación */}
                    <ul className="footer-nav">
                        <li><a href="#acerca">Acerca</a></li>
                        <li><a href="#objetivo">Objetivo</a></li>
                        <li><a href="#mision">Misión y Visión</a></li>
                        <li><a href="#valores">Valores</a></li>
                        <li><a href="#contacto">Contáctanos</a></li>
                        <li><a href="#congreso">Congreso</a></li>
                        <li><a href="#preregistro">Pre-Registro</a></li>
                    </ul>


                    {/* Redes sociales */}
                    <div className="footer-social">
                        <a href="https://www.facebook.com/profile.php?id=100070833475115" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/femexprodac/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/524272260603" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="footer-bottom">
                    <p>© 2026 FEMEXPROD - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterCongreso;
