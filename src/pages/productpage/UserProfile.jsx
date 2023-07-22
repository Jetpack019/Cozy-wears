import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../components/userprofile.css'

function UserProfile() {
  return (
    <Container className="profile-container mt-5">
      {/* Avatar and Background Image */}
      <div className="avatar-background">
        <div className="avatar"></div>
      </div>

      {/* User Information */}
      <Row className="user-info mt-4">
        <Col className="text-center">
          <h2>User's Name</h2>
          <p>Address: 123 Street, City, Country</p>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
