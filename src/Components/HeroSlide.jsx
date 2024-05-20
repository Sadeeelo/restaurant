import React from 'react';
import cafe from '../Images/cafe.jpg'
import cafe2 from '../Images/Cafe2.jpg'
import cafe3 from '../Images/Cafe3.jpg'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const HeroSlide = () => {
    return (
        <div>
            <div className='spacerBox'></div>
            <div className='HeroSlide'>
            <img class="overlay" src="http://www.psd-dude.com/tutorials/images/animated-sunlight-by-psddude.gif" alt="Animated Sunlight by PSDDude"></img>
                <Fade cssClass={'heroSlider'} arrows={false} slidesToScroll={3} slidesToShow={3} transitionDuration={2000} duration={2000} indicators={true} responsive={responsiveSettings}>
                    <div><img src={cafe} className="heroSlideImage" alt="cafe" srcset="" /></div>
                    <div><img src={cafe2} className="heroSlideImage" alt="cafe" srcset="" /></div>
                    <div><img src={cafe3} className="heroSlideImage" alt="cafe" srcset="" /></div>
                </Fade>
            </div>

        </div>
    );
};

export default HeroSlide;