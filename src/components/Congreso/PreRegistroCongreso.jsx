import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PreRegistroCongreso = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    tipo: "General",
  });

  const [loading, setLoading] = useState(false);

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para enviar a un endpoint
  const enviarCorreo = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error en ${url}: ${response.status}`);
    }

    return response.json();
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Hacer ambos envíos en paralelo
      await Promise.all([
        enviarCorreo("https://apimake.isotech.mx/enviarCorreo/enviar-correo", formData),
        enviarCorreo("https://apimake.isotech.mx/enviarCorreo/enviar-autocorreo", formData),
      ]);

      alert("Pre-registro enviado correctamente. ¡Gracias!");
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        tipo: "General",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al enviar el pre-registro. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
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
            <option value="General">General</option>
            <option value="Estudiante">Estudiante</option>
          </select>
        </div>

        <button type="submit" className="btn-enviar" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Pre-Registro"}
        </button>
      </form>
    </section>
  );
};

export default PreRegistroCongreso;
