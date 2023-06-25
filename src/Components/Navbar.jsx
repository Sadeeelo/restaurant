import Logo from '../Images/instagram.svg'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav id='nav'>
            <div>
                <a href="#hero"><p className="hover-underline-animation">Home</p></a>
                <a href="#menu"><p className="hover-underline-animation">Menu</p></a>
                {/* <a href="#about">About</a> */}
                {/* <a href="#footer"><p className="hover-underline-animation">Contact</p></a> */}
            </div>
            <div className="links">
                <a href="#Calendar"><p className="hover-underline-animation"><FontAwesomeIcon icon={faLocationDot} /> Loukonlahden uimaranta</p></a>
            <a href="https://www.instagram.com/kahvilakesamokki/"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </nav>
    )
}

export default Navbar;