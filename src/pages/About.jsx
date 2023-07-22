import React from 'react';
import CustomNavbar from '../components/navbar';
import About_Intro from './aboutpage/about_intro';
import About_Members from './aboutpage/about_members';
import About_Values from './aboutpage/about_values';
import About_Quality from './aboutpage/about_quality';
import About_CustomerService from './aboutpage/about_customerservice';
import About_SocialResponsibility from './aboutpage/about_social_responsibility';
import Footer from '../components/footer';
const About = () => {
  return (
    <div>
         <CustomNavbar />
        <About_Intro/>
        <About_Members/>
        <About_Values/>
        <About_Quality/>
        <About_CustomerService/>
        <About_SocialResponsibility/>
        <Footer/>
    </div>
  );
};

export default About;
