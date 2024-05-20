import React from 'react';
import Banner from '../Components/Banner';
import Location from '../Components/Location';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Hero';
import Menu from '../Components/Menu';
import Navbar from '../Components/Navbar';
import About from '../Components/About'
import Testimonials from '../Components/Testimonials';
import Calendar from '../Components/Calendar';
import Feature from '../Components/Feature';
import Mobnav from '../Components/Mobnav';
import HeroSlide from '../Components/HeroSlide';

const Landing = () => {
  return (
    <div className='page'>
      {/* <Navbar /> */}
      <Mobnav />
      {/* <HeroSection /> */}
      <HeroSlide />
      <Calendar />
      {/* <Feature /> */}
      <Location />
      <Menu />
      {/* <Banner /> */}
      {/* <Testimonials /> */}
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
