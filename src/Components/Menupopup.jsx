import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import taIcon from '../Images/TAsvg.svg'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Menupopup = ({item, open, toggleMenu}) => {

    const handleChildElementClick = (e) => {
        e.stopPropagation()
    }

  return (
    <div className={`menu-popup ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='menu-content' onClick={(e) => handleChildElementClick(e)}>
                <div className='close-menu'>
                    {/* <button onClick={toggleMenu}>X</button> */}
                </div>
            <div className='menu-items'>
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
                {/* <FontAwesomeIcon icon={faPhone} /> */}
                <p>Loukonlahden uimaranta</p>
                <p>Pirkkala, Tampere</p>
            </div>
        </div>
        
    </div>
  )
}

export default Menupopup