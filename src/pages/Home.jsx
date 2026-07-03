import React from 'react';
import '../styles/Home.css';

const Home = ({ tituloPrincipal, imagenHero }) => {
  return (
    <main id="home">
      <section>
        <h1>{tituloPrincipal}</h1>
        <p className="description">Bienvenida a un espacio dedicado a tu bienestar y belleza exterior e interior.</p>
        <img src={imagenHero} alt="Banner Principal" className="main-img" />
      </section>
    </main>
  );
};

export default Home;