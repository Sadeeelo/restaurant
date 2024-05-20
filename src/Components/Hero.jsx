import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Cafe from '../Images/cafe.jpg'
import Logo from '../Images/Logo.png'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Hero.css';

const HeroSection = () => {
  const images = [
    {
      url: Cafe,
      description: "Experience fine dining with a view of the city"
    },
    {
      url: 'https://reissuesa.kuvat.fi/kuvat/Suomi%202017/Pirkkala/20170615pirkkala%20(10)-1.jpg?img=img2048',
      description: "Indulge in our signature dishes"
    },
    {
      url: 'https://reissuesa.kuvat.fi/kuvat/Suomi%202017/Pirkkala/20170615pirkkala%20(13)-1.jpg?img=img2048',
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
    <div>
      
    <div className="hero-section" id='hero'>
      {images.map((image, index) => (
        <div className={`image-container ${currentImage === index ? "show" : "hide"}`}>
          <img src={image.url} alt="Restaurant Image"  className={`hero-image ${currentImage === index ? "grow" : "shrink"}`} />
            
        </div>
      ))}
      
    <div className="hero-box"></div>
{/*       
      <div className="hero-video-container">
        <iframe  className='hero-video' width='1920' height='1080'
        src="https://www.youtube.com/embed/Y9sb01FCHLc?autoplay=1&mute=1&loop=1&showinfo=0&controls=0&vq=hd1080&playlist=Y9sb01FCHLc" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
        <div className="video-overlay"></div>
      <img className='logo' src={Logo} alt="logo" />
      </div> */}

      
{/*       
      <div className="hero-video-container">
        <iframe src="https://player.vimeo.com/video/839420279?h=439f5e9bab&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&muted=1"  width="1920" height="1080"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" 
        title="Copy of dji_fly_20230613_174052_665_1686769564225_video"></iframe>
        <div className="video-overlay"></div>
      <img className='logo' src={Logo} alt="logo" />
      </div>
      <div className="hero-location">
        <a href="#location"><p><FontAwesomeIcon icon={faLocationDot} /> Loukonlahden uimaranta</p></a>
      </div> */}
    </div>
    </div>
  );
}

export default HeroSection;