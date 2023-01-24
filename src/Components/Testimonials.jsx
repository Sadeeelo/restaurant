import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import taIcon from '../Images/TAsvg.svg'

const Testimonials = () => {
    const testimonials = [
        {
            text: "I had the pleasure of dining at this Italian restaurant and it was an absolutely fantastic experience. The food was delicious, the service was outstanding, and the ambiance was perfect. I highly recommend the spaghetti carbonara and the tiramisu for dessert. I will definitely be returning!",
            author: "John D"
        },
        {
            text: "I had a wonderful dining experience at this Italian restaurant. The food was authentic and delicious. My favorite dish was the risotto, it was creamy and flavorful. The service was great and the atmosphere was warm and inviting. I highly recommend this restaurant for anyone looking for a great Italian meal.",
            author: "Jane S"
        },
        {
            text: "This Italian restaurant exceeded all of my expectations. The pasta was cooked to perfection and the sauce was out of this world. I also loved the seafood options on the menu. The staff were friendly and accommodating service was great.",
            author: "Bob J"
        },
        {
            text: "The food at this Italian restaurant was absolutely delicious. From the appetizers to the main course and dessert, every dish was cooked to perfection. The staff was very friendly and attentive to our needs. I highly recommend the lasagna and tiramisu for dessert.",
            author: "Jane R"
        },
        {
            text: "I had a fantastic meal at this Italian restaurant. The pasta was cooked al dente and the sauce was rich and flavorful. The seafood was also fresh and cooked perfectly. The staff was friendly and made sure we had a great dining experience. I highly recommend this restaurant for anyone looking for a great Italian meal.",
            author: "Jeff J"
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
            <h2>Testimonials</h2>
            <div className="testimonial-container">
                <button className="prev-button" onClick={prevTestimonial}>
                    <FontAwesomeIcon icon={faCircleLeft} />
                </button>
                <div className="testimonial">
                    <h4 className="author">{testimonials[currentIndex].author}</h4>
                    <p>{testimonials[currentIndex].text}</p>
                        <hr />
                    <div className='review-icons'>
                        <FontAwesomeIcon icon={faYelp} />
                        <img src={taIcon} />
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