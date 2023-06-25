import React, { useState, useEffect } from 'react';
import SUP from '../Images/SUPboard.jpg'
import Molkky from '../Images/molkky.png'
import Spikeball from '../Images/spikeball-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import testimonialsImg from '../Images/testimonials.jpeg'
import taIcon from '../Images/TAsvg.svg'

const Testimonials = () => {
    const testimonials = [
        {
            text: "10€/H",
            author: "SUP-lauta",
            image: SUP
        },
        {
            text: "4€/H",
            author: "Mölkky",
            image: Molkky
        },
        {
            text: "5€/H",
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
            <h2>Vuokrataan</h2>
            <div className="testimonial-container">
                <button className="prev-button" onClick={prevTestimonial}>
                    <FontAwesomeIcon icon={faCircleLeft} />
                </button>
                <div className="testimonial">
                    <div className='container'>
                        <img src={testimonials[currentIndex].image} className='image'/>
                    </div>
                    <div className="content">
                        <h3 className="author">{testimonials[currentIndex].author}</h3>
                            {/* <hr /> */}
                        <h4>{testimonials[currentIndex].text}</h4>
                        {/* <div className='review-icons'>
                            <FontAwesomeIcon icon={faYelp} />
                            <img src={taIcon} />
                        </div> */}
                    </div>
                </div>
                <button className="next-button" onClick={nextTestimonial}>
                <FontAwesomeIcon icon={faCircleRight} />
                </button>
            </div>
            <div className="dots-container">
                {testimonials.map((testimonial, index) => (
                    <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;