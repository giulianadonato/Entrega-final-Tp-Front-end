import React from 'react';
import '../styles/Gallery.css';

const Gallery = ({ fotos }) => {
  return (
    <section id="galeria" className="gallery-section">
      <h2>Nuestra Galería</h2>
      <div className="gallery-container">
        {fotos.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.url} alt={`Imagen ${index}`} />
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;