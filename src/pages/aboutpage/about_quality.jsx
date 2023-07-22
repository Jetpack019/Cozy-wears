import React from 'react';
import '../../components/quality.css';

function About_Quality() {
  return (
    <div className="container-fluid" style={{ marginTop: '50px', backgroundColor: '#E97451' }}>
      <div className="row">
        {/* Top container */}
        <div className="col">
          <div className="container-top" style={{ margin: '10px  10px' }}>
            <h1>Responsible Sourcing</h1>
            <p>We are committed to sourcing materials that are not only high-quality, but also produced in an environmentally sustainable manner, to minimize our impact on the planet.</p>
          </div>
        </div>
      </div>
      <div className="row" style={{ margin: '0px 10px' }}>
        {/* Three containers in the middle row */}
        <div className="col-md-4 col-sm-12">
          <div className="container-middle">
            <h1>Ethical Manufacturing</h1>
            <p>We believe that ethical manufacturing practices are essential to creating a better world, and we work closely with our manufacturing partners to ensure that all of our cozy wear is produced in safe and fair working conditions.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="container-middle">
            <h1>Quality and Sustainability</h1>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="container-middle">
            <h1>Sustainable Packaging</h1>
            <p>We are committed to reducing our environmental footprint by using eco-friendly packaging materials, such as recycled paper and biodegradable plastics.</p>
          </div>
        </div>
      </div>
      <div className="row" style={{ margin: '0px 10px' }}>
        {/* Two containers at the bottom */}
        <div className="col-md-6 col-sm-12">
          <div className="container-bottom">
            <h1>Quality Control</h1>
            <p>We take quality very seriously, and we have strict quality control processes in place to ensure that every cozy wear product we produce meets our high standards for durability, comfort, and style.</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="container-bottom">
            <h1>Innovative Design</h1>
            <p>Our team of designers is constantly innovating and pushing the boundaries of cozy wear design, creating products that not only look great, but also provide superior comfort and functionality.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Quality;
