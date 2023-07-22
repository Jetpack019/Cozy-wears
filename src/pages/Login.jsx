import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Login() {
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
        marginTop: '20px'
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
        alignItems: 'center'
      };
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center" style={h2Styles }>Sign In</h2>
            <form style={{padding: '0px 50px'}}>
              <div className="form-group1" style={pstyles}>
                <label htmlFor="email" style={pstyles}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={ inputstyles}
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
                  style={ inputstyles}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-danger btn-lg"
                  style={buttonStyles}
                >
               Login
                </button>
              </div>
              <div className="text-center mt-3">
                <h5 style={pstyles}>
                  Don't have an account?{' '}
                  <Link to="/signup" style={pstyles}>
                    Sign up
                  </Link>
                </h5>
              </div>
            </form>

            <div className="text-center mt-2">
              <p style={{ color: '#E97451' }}>Or sign up with:</p>
              <div className="justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-danger btn-lg"
                  style={buttonStylesSignup}
                >
                  <AiFillGoogleCircle />
                  Sign up with Google
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-danger btn-lg"
                  style={buttonStylesSignup}
                >
                  <AiFillFacebook />
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
