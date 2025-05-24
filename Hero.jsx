import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Cafe from '../Images/cafe.jpg'
import Logo from '../Images/Logo.png'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Hero.css';

const Hero = () => {
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
          <div className={`image-container ${currentImage === index ? "show" : "hide"}`} key={index}>
            <img src={image.url} alt="Restaurant" className={`hero-image ${currentImage === index ? "grow" : "shrink"}`} />
          </div>
        ))}
        <img className='logo' src={Logo} alt="logo" />
        <div className="hero-box"></div>
      </div>

      {/* Aukioloajat näkyviin heti hero-kuvan jälkeen */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', textAlign: 'center' }}>
        <h2>Kesämökki on avoinna säävarauksella 2025</h2>
        <p>
          ma–to 13–20<br />
          pe 13–21<br />
          la 11–21<br />
          su 11–20
        </p>
      </div>
    </div>
  );
};

export default Hero;
