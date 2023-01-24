import React from 'react';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div>
            <div className="copyright">
                <h2>Razalalanana</h2>
            </div>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        </div>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <p>
                            123 Main St.<br />
                            Anytown, USA 12345<br />
                            555-555-5555
                        </p>
                    </div>
                    {/* <div>
                        <h3>Subscribe</h3>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;