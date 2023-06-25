import React from 'react';
import Logo from '../Images/Logo.png'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div>
            <div className="copyright">
                <img src={Logo}></img>
            </div>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/kahvilakesamokki/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        </div>
                    </div>
                    <div>
                        <h3>Visit Us</h3>
                        <p>
                            Loukonlahden uimaranta<br />
                            Pirkkala<br />
                            Pirkanmaa<br />
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