import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function SignUp() {
  const pstyles = {
    color: '#E97451',
    fontSize: '1.2rem',
  };

  const inputstyles = {
    color: '#E97451',
    marginRight: '5px',
  };

  const h2Styles = {
    color: '#E97451',
    fontSize: '3rem',
  };

  const buttonStyles = {
    borderRadius: '0',
    height: '50px',
    width: '220px',
    color: '#E97451',
    marginTop: '20px',
  };

  const buttonStylesSignup = {
    borderRadius: '0',
    height: '35px',
    width: '220px',
    fontSize: '.8rem',
    color: '#E97451',
    marginTop: '10px',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center" style={h2Styles}>
                Sign Up
              </h2>
              <form style={{ padding: '0px 50px' }}>
                <div className="form-group1" style={pstyles}>
                  <label htmlFor="name" style={pstyles}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    style={inputstyles}
                  />
                </div>
                <div className="form-group1" style={pstyles}>
                  <label htmlFor="email" style={pstyles}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    style={inputstyles}
                  />
                </div>
                <div className="form-group1" style={pstyles}>
                  <label htmlFor="password" style={pstyles}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    style={inputstyles}
                  />
                </div>
                <div className="form-group1" style={pstyles}>
                  <label htmlFor="contact" style={pstyles}>
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    placeholder="Enter your contact number"
                    style={inputstyles}
                  />
                </div>
                <div className="form-group1" style={pstyles}>
                  <label htmlFor="gender" style={pstyles}>
                    Gender
                  </label>
                  <select
                    className="form-control"
                    id="gender"
                    style={inputstyles}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group1" style={pstyles}>
                  <label htmlFor="creditcard" style={pstyles}>
                    Credit Card Details
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="creditcard"
                    placeholder="Enter your credit card details"
                    style={inputstyles}
                  />
                </div>
                <div className="form-group1" style={pstyles}>
                  <label htmlFor="location" style={pstyles}>
                Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Enter your location"
                    style={inputstyles}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-danger btn-lg"
                    style={buttonStyles}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <h5 style={pstyles}>
                  Have an account?{' '}
                  <Link to="/login" style={pstyles}>
                   Login
                  </Link>
                </h5>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
