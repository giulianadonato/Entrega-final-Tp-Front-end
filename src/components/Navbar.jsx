import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h1>Centro Estetis</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
