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
            name: "OREO PANNARI",
            ingredients: ['mansikka, nutella, oreo & kermavaahto'],
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
            price: '6,00€'
          },
          {
            name: "POPPIS JÄDE",
            ingredients: ['vaniljajäätelö, popcorn & kinuskikastike'],
            price: '5,00€'
          },
          {
            name: "KINDER JÄDE",
            ingredients: ['vaniljajäätelö, mansikka, kinder & suklaakastike'],
            price: '6,00€'
          },
          {
            name: "OREO JÄDE",
            ingredients: ['vaniljajäätelö, mansikka, oreo & nutella'],
            price: '6,00€'
          },
          {
            name: "DAIM JÄDE",
            ingredients: ['vaniljajäätelö, daim-rouhe, oreo & nutella'],
            price: '5,50€'
          },
          {
            name: "IRTOJÄÄTELÖPALLO",
            ingredients: [''],
            price: '3,50€'
          },
          {
            name: "",
            ingredients: ['KASTIKE + 0,50€'],
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
            price: '1,00€'
          },
          {
            name: "VESIPULLO",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "LIMSA",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "NOVELLE",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "GATORADE",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "ENERGIAJUOMA",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "VICHY",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "TEE",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "JÄÄTEE",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "ITALIAN SOODA",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "KAHVI",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "KAHVI",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "JÄÄKAHVI",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "HAPPY JOE APPLE 0%",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "ORIGINAL LONG DRINK 0%",
            ingredients: [''],
            price: '1,00€'
          },
          {
            name: "HEINEKEN 0%",
            ingredients: [''],
            price: '1,00€'
          },
        ]
      },
      {
        name: "Muut Tuotteet",
        description: '',
        options: [
          {
            name: "BAREBELLS PROTEIINI-JUOMA",
            ingredients: [''],
            price: '€4.00'
          },
          {
            name: "BAREBELLS PROTEIINI-PATUKKA",
            ingredients: [''],
            price: '€3.50'
          },
          {
            name: "FAZERIN SININEN",
            ingredients: [''],
            price: '€1.50'
          },
          {
            name: "GEISHA",
            ingredients: [''],
            price: '€1.50'
          },
          {
            name: "SIPSIPUSSI",
            ingredients: [''],
            price: '€2.50'
          },
          {
            name: "PULLA/VAIHTUVA LEIVOS",
            ingredients: [''],
            price: '€2.50'
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
    <section id="menu">
      <Menupopup item={item} open={menuOpen} toggleMenu={toggleMenu}/>
      <h2>Menu</h2>
      <ul className='menu'>
        <li className='menu-item'>
          <img src={'https://www.zimbokitchen.com/wp-content/uploads/2016/07/Zimbokitchen_pilchards_sandwich_VB.png'} alt="paddleboarding" />
          <div>
            <h4>Toastit</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button' onClick={() => expandMenu('Toastit')} ><p className="hover-underline-animation">view options</p></button>
        </li>
        <li className='menu-item'>
          <img src={'https://maddogmom.com/wp-content/uploads/2011/12/dreamstime_s_15410610-600x399.jpg'} alt="Spikeball" />
          <div>
            <h4>Pannari-annokset</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button' onClick={() => expandMenu('Pannari-annokset')} ><p className="hover-underline-animation">view options</p></button>
        </li>
        <li className='menu-item'>
          <img src={'https://i.imgur.com/SJGrfX3.png'} alt="Food" />
          <div>
            <h4>Jäätelö-Annokset</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button' onClick={() => expandMenu('Jäätelö-Annokset')} ><p className="hover-underline-animation">view options</p></button>
        </li>
        <li className='menu-item'>
          <img src={'https://i.imgur.com/SJGrfX3.png'} alt="Food" />
          <div>
            <h4>Ingman Irtojäätelö</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button' onClick={() => expandMenu('Ingman Irtojäätelö')} ><p className="hover-underline-animation">view options</p></button>
        </li>
        <li className='menu-item'>
          <img src={Coffee} alt="Juomat" />
          <div>
            <h4>JUOMAT</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button' onClick={() => expandMenu('Juomat')} ><p className="hover-underline-animation">view options</p></button>
        </li>
        <li className='menu-item'>
          <img src={Coffee} alt="Muut tuotteet" />
          <div>
            <h4>Muut tuotteet</h4>
          </div>
          {/* <p></p> */}
            <button className='menu-button' onClick={() => expandMenu('Muut Tuotteet')} ><p className="hover-underline-animation">view options</p></button>
        </li>
      </ul>
    </section>
  )
}

export default Menu