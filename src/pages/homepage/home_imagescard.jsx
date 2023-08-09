import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeImageCard() {
  const h1Styles = {
    color: '#E97451',
    fontSize: '3rem',
    marginTop: '50px',
  };

  return (
    <div>
      <div className="container" style={{ marginTop: '120px', minHeight: '100vh' }}>
        <div className="text-center">
          <h1 style={h1Styles}>CASUAL COMFORT</h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <img
              src="images/home/female23.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="images/home/male12.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="images/home/female24.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeImageCard;
