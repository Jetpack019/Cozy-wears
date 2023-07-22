import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css'
function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <h4>Home</h4>
            <ul>
              <li>About</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h4>About Us</h4>
            <ul>
              <li>Company</li>
              <li>Our Team</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h4>Services</h4>
            <ul>
              <li>Sweaters</li>
              <li>Accessories</li>
              <li>Sales</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h4>Support</h4>
            <ul>
              <li>FAQ</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h4>Subscribe to CozyWear</h4>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="col-md-4 col-sm-6">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
