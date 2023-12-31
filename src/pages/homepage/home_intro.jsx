import React from 'react';

function HomeIntro() {
  const h1Styles = {
    color: '#E97451',

 
  };
  const pstyles = {
    color: '#E97451',
 
  };
  return (
    <div className="container mt-5">
      <div className="row align-items-center" style={{padding:'0 40px'}}>
        <div className="col-md-5 col-lg-5" >
          <h1 style={h1Styles} class="h1">Cozy Fashion: Where Comfort Meets Style.</h1>
          <p style={pstyles} class="lead">
            Comfortable and stylish clothing is no longer mutually exclusive, thanks to the latest
            trend in fashion - cozywear. Cozywear has become a staple in many people's wardrobes,
            with its versatility and practicality making it a popular choice for any occasion.
          </p>
        </div>
      
          <img
            src="images/home/home2.png"
            className="img-fluid"
            alt=""
            style={{ width: '100%', maxWidth: '600px' }}
          />
        
      </div>
    </div>
  );
}

export default HomeIntro;
