import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import taIcon from '../Images/TAsvg.svg'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Images/Logo.png'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Menupopup = ({item, open, toggleMenu}) => {

    const handleChildElementClick = (e) => {
        e.stopPropagation()
    }

  return (
    <div>
        <div className={`close-menu-button ${open ? 'button-open' : ''}`} onClick={toggleMenu}>
            <h3>X</h3>
        </div>
        <div className={`menu-popup ${open ? 'open' : ''}`} onClick={toggleMenu}>
            <div className='menu-content' onClick={(e) => handleChildElementClick(e)}>
                    <div className='close-menu'>
                        {/* <button onClick={toggleMenu}>X</button> */}
                    </div>
                <div className='menu-items'>
                    <div className="content">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    {item.options.map((option) => {
                        return (
                        <div>
                            {/* <hr /> */}
                            <h4>{option.name}</h4>
                                {option.ingredients ? option.ingredients.map((ingredient) => {
                                    return <p>{ingredient}</p>
                                }) : ''}
                            <p>{option.price}</p>
                        </div>
                        )
                    })}

                    </div>
                    <div className='menu-icons'>
                        
                        <img className='logo' src={Logo} alt="logo" />
                        {/* <FontAwesomeIcon icon={faPhone} /> */}
                        <a href='https://www.google.com/maps/dir/61.4761302,23.6759494/Loukonlahden+uimaranta,+Loukonlahti,+33950+Pirkkala/@61.4743345,23.6783634,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x468ed8e30901d4ff:0xafa44f01a0fa8998!2m2!1d23.6805521!2d61.4743345!3e0?entry=ttu'>

                        <p><FontAwesomeIcon icon={faLocationDot} /> Loukonlahden uimaranta</p>
                        <p>Pirkkala, Tampere</p>

                        </a>
                    </div>

                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Menupopup