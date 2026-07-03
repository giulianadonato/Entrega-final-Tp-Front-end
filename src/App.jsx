import React from 'react';
import './styles/Global.css'; 
import Navbar from './components/Navbar';
import Card from './components/Card';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import imgAcne from './assets/acne-collage.jpg';
import imgArrugas from './assets/arrugas-collage.jpg';
import imgHialuronico from './assets/hialuronico-collage.jpg';
import imgBotox from './assets/botox-collage.jpg';
import imgLimpieza from './assets/resultado-limpieza.jpg';
import imgPeeling from './assets/resultado-peeling.jpg';
import imgLaser from './assets/resultado-laser.jpg';

function App() {
  
  const misFotos = [
    { url: imgAcne, descripcion: 'Tratamiento de Acné' },
    { url: imgArrugas, descripcion: 'Líneas de Expresión' },
    { url: imgHialuronico, descripcion: 'Ácido Hialurónico' },
    { url: imgBotox, descripcion: 'Aplicación de Botox' },
    { url: imgLimpieza, descripcion: 'Limpieza Facial' },
    { url: imgPeeling, descripcion: 'Peeling Químico' },
    { url: imgLaser, descripcion: 'Tratamiento Láser' }
  ];

  return (
    <>
      {}
      <Navbar />

      {}
      <Home 
        tituloPrincipal="Estetis" 
        imagenHero={imgLimpieza} 
      />

      {}
      <section id="servicios">
        <h2 style={{ padding: '20px 0' }}>Nuestros Servicios</h2>
        <div className="cards-container">
          <Card 
            imagen={imgAcne} 
            titulo="Tratamientos Faciales" 
            texto="Soluciones avanzadas para el acné y limpieza profunda de cutis." 
          />
          <Card 
            imagen={imgHialuronico} 
            titulo="Rellenos e Inyectables" 
            texto="Aplicación experta de ácido hialurónico y toxina botulínica." 
          />
        </div>
      </section>

      {}
      <Gallery fotos={misFotos} />

      {}
      <Contact />

      {}
      <Footer />
    </>
  );
}

export default App;