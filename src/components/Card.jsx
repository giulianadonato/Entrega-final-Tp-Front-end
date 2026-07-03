import React from 'react';
import '../styles/Card.css';

const Card = ({ imagen, titulo, texto }) => {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
};

export default Card;
