import { Link } from 'react-router-dom';
import Logo from '../Images/instagram.svg'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav id='nav'>
            <div>
                <a href="#"><p className="hover-underline-animation">ETUSIVU</p></a>
                <a href="#location"><p className="hover-underline-animation">SIJAINTI</p></a>
                <a href="#menu"><p className="hover-underline-animation">MENU</p></a>
                <a href="#vuokraa"><p className="hover-underline-animation">VUOKRAA</p></a>
                {/* <Link to="/"><p className="hover-underline-animation">Home</p></Link>
                <Link to="#location"><p className="hover-underline-animation">Location</p></Link>
                <Link to="#menu"><p className="hover-underline-animation">Menu</p></Link> */}
                {/* <a href="#about">About</a> */}
                {/* <a href="#footer"><p className="hover-underline-animation">Contact</p></a> */}
            </div>
            <div className="links">
                {/* <a href="#Calendar"><p className="hover-underline-animation"><FontAwesomeIcon icon={faLocationDot} /> Loukonlahden uimaranta</p></a> */}
                <a href="https://www.instagram.com/kahvilakesamokki/"><FontAwesomeIcon icon={faInstagram} /></a>
                {/* <Link to="https://www.instagram.com/kahvilakesamokki/"><FontAwesomeIcon icon={faInstagram} /></Link> */}
            </div>
        </nav>
    )
}

export default Navbar;