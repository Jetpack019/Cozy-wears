import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About_Intro() {
  const h1Styles = {
    color: '#E97451',
    fontSize: '3rem',
    marginTop: '50px'
  };

  const pstyles = {
    color: '#E97451',
    fontSize: '1rem',
    FontFace: 'Open Sans'
  };

  return (
    <div className="container" style={{ marginTop: '100px',marginBottom:'100px'  }}>
      <div className="row">
        <div className="col-md-6">
          <h1 style={h1Styles}>Cozy Fashion: Where Comfort Meets Style.</h1>
          <p style={pstyles}>
            Comfortable and stylish clothing is no longer mutually exclusive, thanks to the latest trend in fashion - cozywear. Cozywear has become a staple in many people's wardrobes, with its versatility and practicality making it a popular choice for any occasion.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="images/home/home2.png"
            alt=""
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default About_Intro;
