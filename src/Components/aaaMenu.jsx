// Menu.jsx (päivitetty versio)

import React from 'react';

const Menu = () => {
  return (
    <div className="menu-section" style={{ padding: '2rem' }}>
      <h2>MENU</h2>

      <h3>Suolaiset</h3>
      <ul>
        <li>Makkarakori (G) - 9,50€</li>
        <li>Vegekori - 9,50€</li>
        <li>Ranut + dippi - 6€</li>
        <li>Nachot salsalla - 4,50€</li>
        <li>Lasten makkarakori (G) - 6,90€</li>
        <li>Lasten vegekori - 6,90€</li>
      </ul>

      <h3>Jäätelöannokset</h3>
      <ul>
        <li>Kinder - 9,00€</li>
        <li>Banana split - 9,00€</li>
        <li>Rocky road - 9,00€</li>
      </ul>

      <h3>Voileivät (Saatavilla pe–su)</h3>
      <ul>
        <li>Perus (hillolla ja kermavaahdolla) - 7,50€</li>
        <li>Banana split - 9,00€</li>
        <li>Rocky road - 9,50€</li>
      </ul>

      <h3>Vitrinituotteet</h3>
      <p>Vitrinistä löytyy vaihtuvasia makeita ja suolaisia tuotteita - 1,5–5,5€</p>

      <h2>JUOMAT</h2>
      <h3>Virvokkeet</h3>
      <ul>
        <li>Kahvi - 2,50€</li>
        <li>Jääkahvi - 5,50€</li>
        <li>Jääkahvi Deluxe - 6,50€</li>
        <li>Tee - 2,50€</li>
        <li>Jäächai - 5,00€</li>
        <li>Vesipullo - 2,00€</li>
        <li>Trip mehu - 1,50€</li>
        <li>Vichy - 3,50€</li>
        <li>Limsapullo - 3,50€</li>
        <li>Makusooda - 3,00€</li>
        <li>Smoothie - 4,00€</li>
        <li>Gatorade - 4,00€</li>
      </ul>

      <h3>Holilliset</h3>
      <ul>
        <li>Sandels - 7,90€</li>
        <li>Sol - 7,90€</li>
        <li>Lahden cr. IPA 0,5l - 9,00€</li>
        <li>Lonkero - 7,90€</li>
        <li>Happy Joe - 7,90€</li>
        <li>Kuutuviini (0,2) - 9,90€</li>
        <li>Valkoviini (75cl) - 21,00€</li>
        <li>Rose (75cl) - 21,00€</li>
        <li>Heineken 0% - 5,50€</li>
        <li>Ginger Joe 0% - 5,50€</li>
      </ul>

      <h3>Drinkit</h3>
      <ul>
        <li>Vadelma mojito - 9,50€</li>
        <li>Moscow mule - 9,50€</li>
        <li>Caipiroska - 9,50€</li>
      </ul>

      <h3>Kannut</h3>
      <ul>
        <li>Punainen sangria kannu - 23,00€</li>
        <li>Valkoinen sangria kannu - 23,00€</li>
      </ul>
    </div>
  );
};

export default Menu;
