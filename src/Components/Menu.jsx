import React, {useState} from 'react'
import Menupopup from './Menupopup';



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
        name: "Pizza",
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
          },
          {
            name: "Napoletana",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          },
          {
            name: "Siciliana",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          },
          {
            name: "Fritta",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          },
          {
            name: "Taglio",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          }
        ]
      },
      {
        name: "Pasta",
        description: '',
        options: [
          {
            name: "Spaghetti alla carbonara",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          },
          {
            name: "Lasagna Bolognese",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          },
          {
            name: "Lasagna Bolognese",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          },
          {
            name: "Lasagna Bolognese",
            ingredients: ['Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.'],
            price: '€10.99'
          }
        ]
      },
      {
        name: "Salads",
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
      },
      {
        name: "Steak",
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
      },
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
      <h2>Our Menu</h2>
      <ul className='menu'>
        <li className='menu-item'>
          <img src={'https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=300'} alt="Pizza" />
          <div>
            <h3>Pizza</h3>
          </div>
          <p>Our classic pizza is made with fresh dough, homemade tomato sauce, and a blend of mozzarella and parmesan cheeses.</p>
            <button className='menu-button' onClick={() => expandMenu('Pizza')} >view options</button>
        </li>
        <li className='menu-item'>
          <img src={'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbGlhbiUyMHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=300'} alt="Pasta" />
          <div>
            <h3>Pasta</h3>
          </div>
          <p>Our homemade pasta is cooked to perfection and served with your choice of marinara or Alfredo sauce.</p>
            <button className='menu-button' onClick={() => expandMenu('Pasta')} >view options</button>
        </li>
        <li className='menu-item'>
          <img src={'https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbGlhbiUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=300'} alt="Salad" />
          <div>
            <h3>Salads</h3>
          </div>
          <p>Our salads are made with fresh greens and a variety of toppings, including tomatoes, cucumbers, and croutons.</p>
            <button className='menu-button' onClick={() => expandMenu('Salads')} >view options</button>
        </li>
        <li className='menu-item'>
          <img src={'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudCUyMHN0ZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=300'} alt="Steak" />
          <div>
            <h3>Steak</h3>
          </div>
          <p>Our steak is a succulent cut of beef cooked to perfection and served with your choice of sides.</p>
            <button className='menu-button' onClick={() => expandMenu('Steak')} >view options</button>
        </li>
        <li className='menu-item'>
          <img src={'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMHNlYWZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=300'} alt="Seafood" />
          <div>
            <h3>Seafood</h3>
          </div>
          <p>Our seafood dishes feature a variety of fresh fish and shellfish, cooked to perfection and served with a variety of sauces.</p>
            <button className='menu-button' onClick={() => expandMenu('Seafood')} >view options</button>
        </li>
        <li className='menu-item'>
          <img src={'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=300'} alt="Dessert" />
          <div>
            <h3>Dessert</h3>
          </div>
          <p>Indulge in our heavenly selection of desserts, crafted by our pastry chef with precision and passion.</p>
            <button className='menu-button' onClick={() => expandMenu('Dessert')} >view options</button>
        </li>
      </ul>
    </section>
  )
}

export default Menu