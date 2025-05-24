import React, {useState} from 'react'
import Menupopup from './Menupopup';
import Coffee from '../Images/coffee.jpg'



const Menu = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(
    {
      name: "Seafood",
      description: '',
      options: [
        {
          name: "Pepperoni",
          ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
          price: '€10.99'
        },
        {
          name: "Margharita",
          ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
          price: '€10.99'
        }
      ]
    });
  const [menuOpen, setMenuOpen] = useState(false);
  
    const menuItems = [
      {
        name: "Toastit",
        description: '',
        note: 'SAATAVILLA GLUTEENITON LEIPÄ + 1€',
        options: [
          {
            name: "TOMAATTI MOZZARELLA (L)",
            ingredients: ['tomaatti, mozzarella, basilika, mustapippuri'],
            price: '5,00€'
          },
          {
            name: "KANA MOZZARELLA (L)",
            ingredients: ['kana, mozzarella, tomaatti, basilika, mustapippuri'],
            price: '5,50€'
          },
          {
            name: "PEPPERONI (L)",
            ingredients: ['pepperoni, tomaattikastike, juusto, rucola, pizzamauste'],
            price: '5,50€'
          },
          {
            name: "LISUKE-SALAATTI",
            ingredients: ['salaatti, kurkku tomaatti, oliiviöljy, balsamico mustapippuri'],
            price: '3,00€'
          },
          {
            name: "",
            ingredients: ['SAATAVILLA GLUTEENITON LEIPÄ + 1€'],
            price: ''
          }
        ]
      },
      {
        name: "Pannari-annokset",
        description: '',
        note: '',
        options: [
          {
            name: "PERUS PANNARI",
            ingredients: ['hillo & kermavaahto'],
            price: '5,50€'
          },
          {
            name: "VAAHTIS PANNARI",
            ingredients: ['mustikka, banaani & vaahterasiirappi'],
            price: '7,50€'
          },
          {
            name: "NUTELLA PANNARI",
            ingredients: ['banaani, nutella & kermavaahto'],
            price: '7,50€'
          },
          {
            name: "KINDER PANNARI",
            ingredients: ['mansikka, mustikka, kinder & kermavaahto'],
            price: '8,50€'
          },
          {
            name: "",
            ingredients: ['JÄÄTELÖPALLO + 2,00€'],
            price: ''
          },
          {
            name: "",
            ingredients: ['STRÖSSELI + 0,50€'],
            price: ''
          }
        ]
      },
      {
        name: "Jäätelö-Annokset",
        description: '',
        options: [
          {
            name: "MARJA JÄDE",
            ingredients: ['vaniljajäätelö, mansikka, mustikka & suklaakastike'],
            price: '8,50€'
          },
          {
            name: "NAMU JÄDE",
            ingredients: ['vaniljajäätelö, hedelmäkarkkeja, strösseli & kermavaahto'],
            price: '8,50€'
          },
          {
            name: "OREO JÄDE",
            ingredients: ['vaniljajäätelö, mansikka, oreo & NUTELLA'],
            price: '8,50€'
          },
          {
            name: "BANANA SPLIT",
            ingredients: ['3 palloa valitsemiasi jäätelöitä, kermavaahto, valitsemasi kastike, keksi'],
            price: '9,00€'
          },
          {
            name: "ROCKY ROAD",
            ingredients: ['vaniljajäätelö, suklaa- ja kinuskikastike, vaahtokarkki, suolapähkinä & kermavaahto'],
            price: '9,00€'
          }
        ]
      },
      {
        name: "Ingman Irtojäätelö",
        description: '',
        options: [
          {
            name: "DAIM-TUUTTI",
            ingredients: [''],
            price: '3,00€'
          },
          {
            name: "JÄTTIS VANILJA",
            ingredients: [''],
            price: '3,00€'
          },
          {
            name: "KINGIS ORIGINAL",
            ingredients: [''],
            price: '2,50€'
          },
          {
            name: "LIPSI PÄÄRYNÄ",
            ingredients: [''],
            price: '1,50€'
          },
          {
            name: "LIPSI VADELMA",
            ingredients: [''],
            price: '1,50€'
          },
          {
            name: "MAGNUM CLASSIC",
            ingredients: [''],
            price: '2,80€'
          },
          {
            name: "MAGNUM WHITE CHOCOLATE",
            ingredients: [''],
            price: '2,80€'
          },
        ]
      },
      {
        name: "Juomat",
        description: '',
        options: [
          {
            name: "TRIP",
            ingredients: [''],
            price: '1,50€'
          },
          {
            name: "VESIPULLO / KUPLAVESI",
            ingredients: [''],
            price: '1,50€'
          },
          {
            name: "LIMSA",
            ingredients: [''],
            price: '3,00€'
          },
          {
            name: "NOVELLE",
            ingredients: [''],
            price: '3,00€'
          },
          {
            name: "GATORADE",
            ingredients: [''],
            price: '4,00€'
          },
          {
            name: "ENERGIAJUOMA",
            ingredients: [''],
            price: '3,50€'
          },
          {
            name: "VICHY",
            ingredients: [''],
            price: '3,00€'
          },
          {
            name: "TEE",
            ingredients: [''],
            price: '2,00€'
          },
          {
            name: "KAHVI",
            ingredients: [''],
            price: '2,50€'
          },
          {
            name: "JÄÄKAHVI",
            ingredients: [''],
            price: '5,50€'
          },
          {
            name: "ALKOHOLIA",
            ingredients: [''],
            price: ''
          },
          {
            name: "HAPPY JOE",
            ingredients: [''],
            price: '6,50€'
          },
          {
            name: "LONKERO",
            ingredients: [''],
            price: '7,00€'
          },
          {
            name: "SOL",
            ingredients: [''],
            price: '6,50€'
          },
          {
            name: "SANDELS",
            ingredients: [''],
            price: '6,50€'
          },
          {
            name: "LAHDEN ERIKOIS SUMMER 0,5",
            ingredients: [''],
            price: '8,00€'
          },
          {
            name: "FREIXENET - KUOHUVIINI",
            ingredients: [''],
            price: '8,50€'
          },
          {
            name: "VIINI ALBALI-VALKOVIINI",
            ingredients: [''],
            price: '8,00€'
          },
        ]
      },
      {
        name: "Muut Tuotteet",
        description: '',
        options: [
          {
            name: "SUKLAAPATUKKA",
            ingredients: [''],
            price: '€2,00'
          },
          {
            name: "NACHOT",
            ingredients: ['Salsa, ranskakerma, text-mex kastike. Extra kastike 0,5'],
            price: '€4,00'
          },
          {
            name: "SIPSIPUSSI",
            ingredients: [''],
            price: '€2,50'
          },
          {
            name: "SUKLAAPATUKKA",
            ingredients: [''],
            price: '€2,00'
          },
          {
            name: "SMOOTHIE",
            ingredients: [''],
            price: '€4,50'
          },
          {
            name: "KEKSI",
            ingredients: [''],
            price: '€2,50'
          },
          {
            name: "KORVAPUUSTI",
            ingredients: [''],
            price: '€3,00'
          },
          {
            name: "PORKKANAKAKKU (G, L)",
            ingredients: [''],
            price: '€2,50'
          },
          {
            name: "",
            ingredients: ['kysy gluteenittomia vaihtoehtoja'],
            price: ''
          }
        ]
      },
      {
        name: "Dessert",
        description: '',
        options: [
          {
            name: "Gelato",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          },
          {
            name: "Tiramisu",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          }
        ]
      }
    ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const expandMenu = (menuItem) => {
    setItem(menuItems.find(item => {
      return item.name === menuItem;
    }));
    toggleMenu();
  }

  return (
    <section class="menuSection">
      <a class="anchor" id='menu'></a>
      <Menupopup item={item} open={menuOpen} toggleMenu={toggleMenu}/>
      <h2>MENU</h2>
      <ul className='menu'>
        {/* <li className='menu-item' onClick={() => expandMenu('Toastit')} >
          <img src={'https://i.imgur.com/bilZZOt.jpg'} alt="toastit" />
          <div>
            <h4>Toastit</h4>
          </div>
            <button className='menu-button'><p className="hover-underline-animation">Valikoima</p></button>
        </li> */}
        <li className='menu-item' >
          <img src={'https://mrpanini.fi/app/uploads/2022/04/02-kana-mrpanini-22-10-2-1-scaled.jpg'} alt="Wrapit" />
          <div>
            <h4>Wrapit</h4>
          </div>
            <button disabled className='menu-button'><p className="menu-button-text">£ 6,50</p></button>
        </li>
        <li className='menu-item' >
          <img src={'https://i.imgur.com/xuk8P6n.png'}  alt="pannari annokset" />
          <div>
            <h4>Paninit</h4>
          </div>
            <button disabled className='menu-button'><p className="menu-button-text">£ 6,50</p></button>
        </li>
        <li className='menu-item' onClick={() => expandMenu('Jäätelö-Annokset')} >
          <img src={'https://i.imgur.com/3sILkqT.jpg'} alt="jJäätelö-Annokset" />
          <div>
            <h4>Jäätelö-Annokset</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button'><p className="menu-button-text">Valikoima</p></button>
        </li>
        <li className='menu-item' onClick={() => expandMenu('Ingman Irtojäätelö')} >
          <img src={'https://i.imgur.com/z7HMkKD.jpg'} alt="Ingman Irtojäätelö" />
          <div>
            <h4>Ingman Irtojäätelö</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button'><p className="menu-button-text">Valikoima</p></button>
        </li>
        <li className='menu-item' onClick={() => expandMenu('Juomat')} >
          <img src={'https://i.imgur.com/zq6cIjK.jpg'} alt="Juomat" />
          <div>
            <h4>Juomat</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button'><p className="menu-button-text">Valikoima</p></button>
        </li>
        <li className='menu-item' onClick={() => expandMenu('Muut Tuotteet')} >
          <img src={'https://i.imgur.com/DWW581A.jpg'} alt="Muut tuotteet" />
          <div>
            <h4>Muut tuotteet</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button'><p className="menu-button-text">Valikoima</p></button>
        </li>
      </ul>
    </section>
  )
}

export default Menu
