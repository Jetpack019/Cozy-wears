import React from 'react';

function HomeInfo() {
    const h1Styles = {
        color: '#E97451',
        fontSize: '2.5rem',
        marginTop: '50px'
      };
      const pstyles = {
        color: '#E97451',
        fontSize: '1rem',
        FontFace: 'Open Sans',
        marginTop: '20px'
      };

      const h1Styles2 = {
        color: 'white',
        fontSize: '2.5rem',
        marginTop: '50px'
      };
      const pstyles2 = {
        color: 'white',
        fontSize: '1rem',
        FontFace: 'Open Sans',
        marginTop: '20px'
      };
  return (
    <div >
      {/* Info 1 */}
      <div className="container mt-5" >
        <hr className="mx-2" style={{ backgroundColor: '#E97451', height: '5px' }} />
        <div className="row mt-4">
          <div className="col-md-6">
            <h1 style={h1Styles }>
              Boundless Shopping Convenience
            </h1>
            <p style={pstyles }>
              Embrace the freedom of shopping anytime, anywhere with our everywhere accessible
              ecommerce platform. Explore a wide selection of products, and with just a few clicks,
              have your favorite items delivered to your doorstep, making shopping easier and more
              accessible than ever before.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="images/home/info3.png"
              alt=""
              className="img-fluid"
        
            />
          </div>
        </div>
      </div>

      {/* Info 2 */}
      <div className="container mt-5">
        <div className="row mt-4">
          <div className="col-md-6">
            <img
              src="images/home/info1.png"
              alt=""
              className="img-fluid"
            
            />
          </div>
          <div className="col-md-6  text-white" style={{backgroundColor: '#E97451'}}>
            <div className="p-4">
              <h1 style={{ fontSize: '2.5rem', marginTop: '50px' }}>Empowering Diversity</h1>
              <p style={{ fontSize: '1rem', marginTop: '20px' }}>
                Celebrate diversity and individuality with our ecommerce platform that caters to
                the needs and desires of a vast and varied user base. From fashion enthusiasts to
                tech-savvy individuals and everything in between, our platform welcomes all users
                and ensures that everyone finds something they'll love.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info 3 */}
      <div className="container mt-5">
        <div className="row mt-4">
          <div className="col-md-6">
            <h1 style={h1Styles }>
              Time-Optimized Shopping
            </h1>
            <p style={pstyles }>
              Designed with a user-friendly interface, our platform allows you to manage your
              purchases efficiently, making the most of your valuable time. With features like
              quick checkout, personalized recommendations, and efficient search filters, finding
              and buying your desired products becomes a breeze, giving you more time to enjoy the
              things that matter most.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="images/home/info3.png"
              alt=""
              className="img-fluid"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInfo;
