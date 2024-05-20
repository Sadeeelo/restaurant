import React, { useState, useEffect } from 'react';
import SUP from '../Images/SUPboard.jpg'
import Molkky from '../Images/molkky.png'
import Spikeball from '../Images/spikeball-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import taIcon from '../Images/TAsvg.svg'

const Testimonials = () => {
    const testimonials = [
        {
            text: "10€/Tunti",
            author: "SUP-lauta",
            image: SUP
        },
        {
            text: "4€/Tunti",
            author: "Mölkky",
            image: Molkky
        },
        {
            text: "5€/Tunti",
            author: "Spikeball",
            image: Spikeball
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = currentIndex + 1;
            if (nextIndex === testimonials.length) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(nextIndex);
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentIndex, testimonials.length]);

    const prevTestimonial = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            setCurrentIndex(testimonials.length - 1);
        } else {
            setCurrentIndex(prevIndex);
        }
    }

    const nextTestimonial = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex === testimonials.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(nextIndex);
        }
    }

    return (
        <section className="testimonials-carousel">
        <a class="anchor" id='vuokraa'></a>
            <h2>VUOKRAA MEILTÄ</h2>
            {/* <p>Voit varata SUP-laudat tai pihapelit laittamalla viestiä meille <a href="https://www.instagram.com/kahvilakesamokki/">instagramissa <FontAwesomeIcon icon={faInstagram} /></a></p> */}
            <div className="testimonial-container">
                <div className="testimonial">
                    <div className="content">
                        <h3 className="author">{testimonials[currentIndex].author}</h3>
                            {/* <hr /> */}
                        <p>{testimonials[currentIndex].text}</p>
                        {/* <div className='review-icons'>
                            <FontAwesomeIcon icon={faYelp} />
                            <img src={taIcon} />
                        </div> */}
                    </div>
                    <div className='container'>
                        <img src={testimonials[currentIndex].image} className='image'/>
                    </div>
                </div>
            </div>
            <div className="dots-container">
                <button className="prev-button" onClick={prevTestimonial}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {testimonials.map((testimonial, index) => (
                    <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
                ))}
                <button className="next-button" onClick={nextTestimonial}>
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}

export default Testimonials;