import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../components/navbar';

function Contact_Page() {
  const buttonStyles = {
    borderRadius: '0', 
    borderWidth: '0',
    margin: '20px 0',
    height: '50px',
    color: 'white', 
    backgroundColor: '#E97451'
  };

  return (
    <div>
      <CustomNavbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Contact Us</h1>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form
              target="_blank"
              action="https://formsubmit.co/banagjadeross@gmail.com"
              method="POST"
            >
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your full name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email address" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Enter your message" required />
              </Form.Group>
              <Button type="submit" style={buttonStyles} block>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.73460529069!2d120.81989507401617!3d14.951872168382224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965559e98de989%3A0x113c1e592615fe9e!2sBatasan%20St.!5e0!3m2!1sen!2sph!4v1689966205512!5m2!1sen!2sph"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="embed-responsive-item"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact_Page;
