import React from 'react'
import Bannerbg from '../Images/wine.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <h2>Wines</h2>
        <p>Our wine list features a diverse range of wines from various regions of Italy. <br /><br />Whether you prefer a light and crisp white wine or a full-bodied red, our knowledgeable staff can help you find the perfect pairing for your meal. <br /><br />We also offer a selection of sparkling wines and dessert wines to complete your dining experience. Saluti!</p>
        <ul>
          <h3>Wine List</h3>
          <li>Chianti</li>
          <li>Barolo</li>
          <li>Pinot Grigio</li>
          <li>Prosecco</li>
          <li>Nero d'Avola</li>
          <li>Vermentino</li>
          <li>Moscato d'Asti</li>
          <li>Brunello di Montalcino</li>
        </ul>
      </div>
        <img src={Bannerbg} alt="banner" />
    </div>
  )
}

export default Banner