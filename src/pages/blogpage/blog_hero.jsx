import React from 'react'

function Blog_hero() {
    const h1Styles = {
        color: 'white',
        fontSize: '5rem',
      };
    
      const spanStyles = {
        color: '#E97451',
      };
    
      const pstyles = {
        color: 'white',
        fontSize: '2rem',
        FontFace: 'Open Sans'
      };
    
      const buttonStyles = {
        borderRadius: '0', 
        height: '50px',
        color: '#E97451', 
     
      };
    
  return (
    <div
    className="hero-section"
    style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/home/back2.jpg')",
      height: '60vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className="container d-flex justify-content-center align-items-center text-center h-100">
      <div className="hero-content">
        <h1 style={h1Styles}>
          <span style={spanStyles}>B</span>LOGS 
        </h1>
     
      </div>
    </div>
  </div>
  )
}

export default Blog_hero
