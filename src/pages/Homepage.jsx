import React from 'react';
import CustomNavbar from '../components/navbar';
import HomeHero from './homepage/home_hero';
import DraggableCarousel from './homepage/home_imgcarousel';
import HomeIntro from './homepage/home_intro';
import HomeImageCard from './homepage/home_imagescard';
import HomeInfo from './homepage/home_moreInfo';
import HomeBanner from './homepage/home_banner';
import HomeTestimonials from './homepage/home_testimonials';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <CustomNavbar />
      <HomeHero/>
      <br />
      <DraggableCarousel/>
      <br />
      <HomeIntro/>
      <HomeImageCard/>
      <HomeInfo/>
      <HomeBanner/>
      <HomeTestimonials/>
      <Footer/>
    </div>
  );
};

export default HomePage;
