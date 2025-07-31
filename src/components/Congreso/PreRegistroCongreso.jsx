import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

const PreRegistroCongreso = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    tipo: "general",
  });

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * IMPORTANTE:
     * Reemplaza "service_56ecwnb" y "template_xxxxxx" con los valores de tu cuenta EmailJS.
     * - SERVICE_ID: lo obtienes en Email Services.
     * - TEMPLATE_ID: lo obtienes en Templates.
     * - PUBLIC_KEY: ya tienes "b5KUhnktsjo7uMHzM".
     */
    emailjs.send(
      "service_56ecwnb",       // SERVICE ID (correcto)
      "template_hola_femexprod", // TEMPLATE ID real (NO uses el correo)
      formData,                 // Datos del formulario
      "b5KUhnktsjo7uMHzM"       // PUBLIC KEY
    )

      .then(
        () => {
          alert("Pre-registro enviado correctamente. ¡Gracias!");
          setFormData({
            nombre: "",
            correo: "",
            telefono: "",
            tipo: "general",
          });
        },
        (error) => {
          console.error("Error al enviar el formulario:", error);
          alert("Error al enviar el formulario. Intenta nuevamente.");
        }
      );
  };

  return (
    <section className="preregistro-congreso">
      <Helmet>
        <title>Pre-Registro Congreso FEMEXPROD</title>
        <meta
          name="description"
          content="Formulario de pre-registro para el LII Congreso Nacional FEMEXPROD. Asegura tu lugar en este evento único para profesionales de la prótesis dental."
        />
      </Helmet>

      {/* Encabezado */}
      <div className="header-curvo-preregistro">
        <h2 className="titulo-preregistro">Pre-Registro</h2>
        <p className="subtitulo-preregistro">
          Asegura tu lugar en el LII Congreso Nacional FEMEXPROD
        </p>
      </div>

      {/* Formulario */}
      <form className="form-preregistro" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo de Participante</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange}>
            <option value="general">General</option>
            <option value="estudiante">Estudiante</option>
          </select>
        </div>

        <button type="submit" className="btn-enviar">
          Enviar Pre-Registro
        </button>
      </form>
    </section>
  );
};

export default PreRegistroCongreso;
