import React from 'react';

function HomeHero() {
  const h1Styles = {
    color: 'white',
    fontSize: '3rem',
  };

  const spanStyles = {
    color: '#E97451',
  };

  const pstyles = {
    color: 'white',
    fontSize: '2rem',
    FontFace: 'Open Sans'
  };

  const buttonStyles = {
    borderRadius: '0', 
    height: '50px',
    color: '#E97451', 
 
  };

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/home/back1.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container d-flex justify-content-center align-items-center text-center h-100">
        <div className="hero-content">
          <h1 style={h1Styles}>
            <span style={spanStyles}>COZ</span>Y <span style={spanStyles}>WE</span>ARS
          </h1>
          <p style={pstyles}>
          Your Online Destination for Warmth and Comfort
          </p>
          <button type="button" className="btn btn-outline-light  btn-lg" style={buttonStyles}>
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
