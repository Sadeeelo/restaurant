import Logo from '../Images/instagram.svg'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Mobnav = () => {

    const toggleNav = () => {

    }

    return (
        <nav id='mobilenav'>
            <FontAwesomeIcon icon={faBars} onClick={()=> toggleNav} />
            <div className='drawer'>
                <a href="#hero"><p className="hover-underline-animation">Home</p></a>
                <a href="#menu"><p className="hover-underline-animation">Menu</p></a>
            </div>
        </nav>
    )
}

export default Mobnav;