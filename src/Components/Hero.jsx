import React, { useState, useEffect } from 'react';
import Logo from '../Images/Logo.png'

import './Hero.css';

const HeroSection = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: "Experience fine dining with a view of the city"
    },
    {
      url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: "Indulge in our signature dishes"
    },
    {
      url: 'https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: "Savor the flavors of our expertly crafted menu"
    }
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  return (
    <div className="hero-section">
      {images.map((image, index) => (
        <div className={`image-container ${currentImage === index ? "show" : "hide"}`}>
          <img src={image.url} alt="Restaurant Image"  className={`hero-image ${currentImage === index ? "grow" : "shrink"}`} />
            <img className='logo' src={Logo} alt="logo" />
          {/* <div className="description">
            <h2>{image.description}</h2>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default HeroSection;