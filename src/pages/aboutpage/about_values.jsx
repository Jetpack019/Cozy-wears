import React, { useState } from 'react';

function About_Values() {
  const [hovered, setHovered] = useState(false);

  const containerStyles1 = {
    backgroundColor: hovered ? '#E97451' : '#f0f0f0',
    transition: 'background-color 0.3s ease',
    padding: '20px',

    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const containerStyles2 = {
    backgroundColor: hovered ? '#f0f0f0' : '#E97451',
    transition: 'background-color 0.3s ease',
    padding: '20px',
    
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  const h1Styles1 = {
    color: hovered ? '#f0f0f0' : '#E97451',
    fontSize: '3rem',
    marginTop: '50px',
    transition: 'color 0.3s ease',
  };

  const pStyles1 = {
    color: hovered ? '#f0f0f0' : '#E97451',
    fontSize: '1rem',
    fontFace: 'Open Sans',
    transition: 'color 0.3s ease',
  };
  const h1Styles2 = {
    color: hovered ? '#E97451' : '#f0f0f0' ,
    fontSize: '3rem',
    marginTop: '50px',
    transition: 'color 0.3s ease',
  };

  const pStyles2 = {
    color: hovered ?  '#E97451': '#f0f0f0',
    fontSize: '1rem',
    fontFace: 'Open Sans',
    transition: 'color 0.3s ease',
  };

  const handleContainerHover = () => {
    setHovered(true);
  };

  const handleContainerLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="container mt-5" style={{marginTop: '50px',}}
    >
      <div className="row"  >
        <div className="col-md-6">
          <div className="card mb-4" style={containerStyles1}
      onMouseEnter={handleContainerHover}
      onMouseLeave={handleContainerLeave}>
            <div className="card-body">
              <h1 style={h1Styles1}>Making Cozy Wear Accessible to All.</h1>
              <p style={pStyles1}>
                Our mission is to make cozy wear accessible to everyone, regardless of their age,
                gender, or style preference. We believe that everyone deserves to feel comfortable
                and confident in their clothing, and we strive to provide cozy wear that meets the
                needs of a diverse range of customers
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6" >
          <div className="card" style={containerStyles2}
      onMouseEnter={handleContainerHover}
      onMouseLeave={handleContainerLeave}>
            <div className="card-body">
              <h1 style={h1Styles2}>Elevating Your Cozy Experience.</h1>
              <p style={pStyles2}>
                At our brand, our purpose is to elevate your cozy experience through innovative
                design, exceptional quality, and unparalleled customer service. We believe that cozy
                wear should be more than just comfortable - it should also make you feel confident,
                stylish, and empowered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Values;
