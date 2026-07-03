import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '', email: '', tel: '', mensaje: '', interes: 'Estética', terminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Gracias por contactarte. Revisa la consola para ver los datos.');
  };

  const handleReset = () => {
    setFormData({ nombre: '', email: '', tel: '', mensaje: '', interes: 'Estética', terminos: false });
  };

  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="tel" name="tel" value={formData.tel} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Interés:</label>
          <select name="interes" value={formData.interes} onChange={handleChange}>
            <option value="Estética">Estética</option>
            <option value="Masajes">Masajes</option>
            <option value="Facial">Facial</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="4"></textarea>
        </div>
        <div className="radio-container">
          <label>
            <input type="checkbox" name="terminos" checked={formData.terminos} onChange={handleChange} /> 
            Acepto los términos y condiciones
          </label>
        </div>
        <div className="buttons">
          <button type="submit" className="btn-send">Enviar</button>
          <button type="button" className="btn-reset" onClick={handleReset}>Resetear</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;