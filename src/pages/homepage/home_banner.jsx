import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HomeBanner() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/home/bannerimg.jpg')",
          height: "400px", // Adjust the height as needed for a cozywear banner
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col md={6} className="d-flex align-items-center">
              <div className="text-center text-white banner-content">
                <h2>Welcome to Cozywear</h2>
                <p>Discover the perfect cozy outfits for every occasion.</p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className="text-center text-white banner-content">
                <h1>50% off</h1>
                <p>Shop now and stay warm and stylish with our cozywear collection.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeBanner;
