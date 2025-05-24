import React from 'react'
import Bannerbg from '../Images/SUPboard.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <h2>SUP-Lauta vuokraa</h2>
        <h1>10€/H</h1>
        {/* <ul>
          <h3>Wine List</h3>
          <li>Chianti</li>
          <li>Barolo</li>
          <li>Pinot Grigio</li>
          <li>Prosecco</li>
          <li>Nero d'Avola</li>
          <li>Vermentino</li>
          <li>Moscato d'Asti</li>
          <li>Brunello di Montalcino</li>
        </ul> */}
      </div>
        <img src={Bannerbg} alt="banner" />
    </div>
  )
}

export default Banner