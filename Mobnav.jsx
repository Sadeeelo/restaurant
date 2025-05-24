import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Images/Logo.png'
// import "./Mobnav.css";

const Mobnav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="Mobnav">
      {/* <h1 className="Mobnav-logo">
        React <i className="fab fa-react"></i>
      </h1> */}
      <img className='navbar-logo' src={Logo} alt="logo" />
      
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        {active ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index} onClick={handleClick}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      
      {/* <Button>SIGN UP</Button> */}
    </nav>
  );
};

export default Mobnav;