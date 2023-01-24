import React from 'react';
import Banner from '../Components/Banner';
import Location from '../Components/Location';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Hero';
import Menu from '../Components/Menu';
import Navbar from '../Components/Navbar';
import About from '../Components/About'
import Testimonials from '../Components/Testimonials';

const Landing = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <About />
      <Menu />
      <Banner />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
};

export default Landing;
