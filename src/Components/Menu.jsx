import React, { useState } from 'react';
import uusimenu from '../images/uusimenu.jpg';

export default function MenuVanha() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Menu</h1>
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? 'Piilota menu' : 'Näytä menu'}
      </button>

      {showMenu && (
        <div style={{ marginTop: '1rem' }}>
          <img
            src={uusimenu}
            alt="Kesämökin menu"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
}
