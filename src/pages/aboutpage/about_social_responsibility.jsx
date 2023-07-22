import React from 'react'

function About_SocialResponsibility() {
  const h1Styles = {
    color: '#E97451',
    fontSize: '3rem',
    marginTop: '50px',
  };

  const pstyles = {
    color: '#E97451',
    fontSize: '1rem',
    FontFace: 'Open Sans',
  };

  return (
    <div className="container" style={{ marginTop: '100px',marginBottom:'100px' }}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 style={h1Styles}>Creating a Positive Impact Through Sustainable Practices.</h1>
          <p style={pstyles}>
            At our brand, we believe that social responsibility is essential to creating a positive impact on the world. We are committed to promoting sustainability and ethical practices throughout our supply chain, from sourcing materials to manufacturing and shipping our cozy wear products. We strive to minimize our impact on the environment and support communities in need through partnerships and initiatives that align with our values.
          </p>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            src="images/about/about_createpositive.jpg"
            alt=""
            style={{ width: '100%',  }}
          />
        </div>
      </div>
    </div>
  );
}

export default About_SocialResponsibility
