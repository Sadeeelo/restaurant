import React from 'react';

export default function Rent() {
  return (
    <div className="rent-wrapper" style={{ padding: '2rem' }}>
      <h1>SUP-lautojen vuokraus</h1>
      <p>
        Meillä on vuokrattavana <strong>6 SUP-lautaa</strong> kahvilalla.<br />
        Vuokrauksen ikäraja on <strong>K16</strong>, mutta aikuisen seurassa ja pelastusliivien kanssa myös nuoremmat voivat vuokrata oman laudan.
      </p>
      <ul>
        <li>1 tunti – 15 €</li>
        <li>2 tuntia – 25 €</li>
        <li>Koko päivä – 40 €</li>
      </ul>
      <p>Myös pidempiaikaiset vuokraukset esim. viikonlopun yli onnistuvat 🙂</p>
    </div>
  );
}
