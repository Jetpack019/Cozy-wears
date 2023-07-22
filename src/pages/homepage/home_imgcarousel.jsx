import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/customnavbar.css';

const DraggableCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragStart = (event) => {
    event.preventDefault();
    if (event.type === 'touchstart') {
      setStartPos(event.touches[0].clientX);
    } else {
      setStartPos(event.clientX);
    }
    setIsDragging(true);
  };

  const drag = (event) => {
    if (isDragging) {
      let currentPosition;
      if (event.type === 'touchmove') {
        currentPosition = event.touches[0].clientX;
      } else {
        currentPosition = event.clientX;
      }
      const diff = currentPosition - startPos;
      setCurrentTranslate(prevTranslate + diff);
    }
  };

  const dragEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);

    if (currentTranslate < prevTranslate && currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentTranslate > prevTranslate && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setCurrentTranslate(0);
  };

  return (
    <div className="container-sm" style={{ marginTop: '50px' }}>
      <div
        id="demo"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          height: '80vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '@media (max-width: 768px)': {
            height: '60vh', 
          },
        }}
      >
     
        <div className="carousel-indicators d-flex justify-content-center mt-3">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className={currentIndex === 0 ? 'active me-1' : 'me-1'}></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className={currentIndex === 1 ? 'active me-1' : 'me-1'}></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className={currentIndex === 2 ? 'active' : ''}></button>
        </div>

        <div
          className="carousel-inner"
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            transform: `translateX(${currentTranslate}px)`,
            transition: isDragging ? 'none' : 'transform 0.4s ease',
            '@media (max-width: 768px)': {
              height: '60vh', 
            },
          }}
          onMouseDown={dragStart}
          onTouchStart={dragStart}
          onMouseMove={drag}
          onTouchMove={drag}
          onMouseUp={dragEnd}
          onTouchEnd={dragEnd}
          onMouseLeave={dragEnd}
        >
          <div className={currentIndex === 0 ? 'carousel-item active' : 'carousel-item'}>
            <div className="carousel-item-content" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img src="images/home/male9.jpg" alt="Los Angeles" className="d-block" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="gradient-overlay position-absolute top-0 start-0"></div>

              <div className="carousel-item-text text-lg" style={{ fontSize: '3rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                Mens Sweater
              </div>
            </div>
          </div>
          <div className={currentIndex === 1 ? 'carousel-item active' : 'carousel-item'}>
            <div className="carousel-item-content" style={{ position: 'relative', width: '100%', height: '100%', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" }}>
              <img src="images/home/female10.jpg" alt="Chicago" className="d-block" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="gradient-overlay position-absolute top-0 start-0"></div>
       
              <div className="carousel-item-text text-lg" style={{ fontSize: '3rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                Womens Sweater
              </div>
            </div>
          </div>
          <div className={currentIndex === 2 ? 'carousel-item active' : 'carousel-item'}>
            <div className="carousel-item-content" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img src="images/home/kid1.jpg" alt="New York" className="d-block" style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))' }} />
              <div className="gradient-overlay position-absolute top-0 start-0"></div>
      
              <div className="carousel-item-text text-lg" style={{ fontSize: '3rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                Kids Sweater
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraggableCarousel;
