import React from 'react';
import '../../components/customerservice.css'; // Import custom CSS for this component
;

function About_CustomerService() {
  const h2Styles = {
    color: '#E97451',
    fontSize: '2.3rem',
    textAlign: 'center',
  };

  const pStyles = {
    color: '#E97451',
    fontSize: '1rem',
    textAlign: 'center',
  };

  return (
    <div className="container" style={{ marginTop: '100px',marginBottom:'100px' }}>
      <div className="row">
        <h1 className="main-heading">Customer Services and Support</h1>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center">
          <div>
            <img src="images/about/about_support.jpg" alt="Image 3" className="container-image" />
            <h2 style={h2Styles}>24/7 Customer Support</h2>
            <p style={pStyles}>Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues you may have. We are here to ensure that you have a smooth and enjoyable shopping experience with us.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center">
          <div>
            <img src="images/about/about_sellerabove.jpg" alt="Image 1" className="container-image" />
            <h2 style={h2Styles}>Going Above and Beyond for Our Customers</h2>
            <p style={pStyles}>We believe that providing exceptional customer service is essential to building trust and loyalty with our customers. That's why we are committed to going above and beyond to ensure that every customer has a positive experience with our brand.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center">
          <div>
            <img src="images/about/about_exchange.jpg" alt="Image 2" className="container-image" />
            <h2 style={h2Styles}>Hassle-Free Returns and Exchanges</h2>
            <p style={pStyles}>We understand that shopping for cozy wear online can be challenging, which is why we offer hassle-free returns and exchanges. If for any reason you are not completely satisfied with your purchase, you can return or exchange it within 30 days of purchase.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About_CustomerService;
