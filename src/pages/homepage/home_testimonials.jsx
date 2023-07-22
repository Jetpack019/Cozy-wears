import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeTestimonials() {
  const h1Styles = {
    color: '#E97451',
    fontSize: '3rem',
    marginTop: '50px'
  };
  const textcolorStyles = {
    color: '#E97451',

  };
 
  return (
    <div>
      <div className="container mt-5" style={{marginTop: '100px',marginBottom: '100px'}}>
        <div className="text-center">
          <h1 style={h1Styles}>Testimonials</h1>
        </div>
        <div className="row mt-4">
          {/* Testimonial 1 */}
          <div className="col-md-6 mb-4">
            <div className="card text-primary">
              <img
                src="images/home/male1.jpg"
                alt="Avatar 1"
                style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '10px auto' }}
              />
              <div className="card-body">
                <h3 className="card-title" style={textcolorStyles}>Excellent Products and Service</h3>
                <p className="card-text" style={textcolorStyles}>
                  Cozywear's collection is top-notch! I absolutely love the cozy outfits I bought.
                  The quality is excellent, and the service was fantastic.
                </p>
                <p style={textcolorStyles}>- Jake Abraham</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-6 mb-4">
            <div className="card text-primary">
              <img
                src="images/home/female10.jpg"
                alt="Avatar 2"
                style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '10px auto' }}
              />
              <div className="card-body">
                <h3 className="card-title" style={textcolorStyles}>Highly Recommended</h3>
                <p className="card-text" style={textcolorStyles}>
                  I highly recommend Cozywear to anyone looking for comfortable and stylish
                  clothing. Their range of cozy outfits is simply amazing!
                </p>
                <p style={textcolorStyles}>- Jane Walters</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-6 mb-4">
            <div className="card text-primary">
              <img
                src="images/home/male9.jpg"
                alt="Avatar 3"
                style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '10px auto' }}
              />
              <div className="card-body">
                <h3 className="card-title" style={textcolorStyles}>Great Shopping Experience</h3>
                <p className="card-text" style={textcolorStyles}>
                  Shopping at Cozywear was a breeze. Their website is easy to navigate, and the
                  delivery was fast. The clothes are beautiful and cozy.
                </p>
                <p style={textcolorStyles}>- Michael Johnson</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="col-md-6 mb-4">
            <div className="card text-primary">
              <img
                src="images/home/female13.jpg"
                alt="Avatar 4"
                style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '10px auto' }}
              />
              <div className="card-body">
                <h3 className="card-title" style={textcolorStyles}>Love the Cozywear Collection</h3>
                <p className="card-text" style={textcolorStyles}>
                  Cozywear has become my go-to store for all things cozy. Their clothes are stylish,
                  comfortable, and perfect for any occasion.
                </p>
                <p style={textcolorStyles}> - Emily Williams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials;
