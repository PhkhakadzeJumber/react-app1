import React from 'react';
import GuitarCard from './GuitarCard';
import "./guitars.css";

import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import flyingV from './assets/flyingV.png';
import lesPaul from './assets/lesPaul.png';
import Fender from './assets/fender.png';
import Explorer from './assets/explorer.png';
import ESP_LTD from './assets/ESP_LTD.png';
import rhoadsV from './assets/rhoadsV.png';
import Telecaster from './assets/telecaster.png';
import Ibanez from './assets/ibanez.png';
import acoustic from './assets/acoustic.png';

const og_guitars = [
  { image: flyingV,   name: "flyingV",    year: 1980, price: 2000, amount: 50  },
  { image: lesPaul,   name: "lesPaul",    year: 1990, price: 3000, amount: 30  },
  { image: Fender,    name: "fender",     year: 1970, price: 1000, amount: 70  },
  { image: Explorer,  name: "explorer",   year: 1985, price: 2500, amount: 20  },
  { image: ESP_LTD,   name: "ESP_LTD",   year: 2000, price: 500,  amount: 100 },
  { image: rhoadsV,   name: "rhoadsV",    year: 2005, price: 4000, amount: 5   },
  { image: Telecaster,name: "telecaster", year: 1975, price: 1500, amount: 90  },
  { image: Ibanez,    name: "ibanez",     year: 1992, price: 3500, amount: 40  },
  { image: acoustic,  name: "acoustic",   year: 2020, price: 200,  amount: 200 },
];

function Home({ cart, setCart, setSum }) {

  const navigate = useNavigate();

  const [guitars, setGuitars] = useState(og_guitars);
  const [counter, setCounter] = useState(0);

  const searchQuery = useOutletContext();

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setGuitars(og_guitars.filter(g =>
        g.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setGuitars(og_guitars);
    }
  }, [searchQuery]);

  function sortGuitars(type) {
    if (type === "") { setGuitars(og_guitars); return; }

    const sorted = [...guitars].sort((a, b) => {
      if (type === "name") return a.name.localeCompare(b.name);
      return a[type] - b[type];
    });

    setGuitars(sorted);
  }

  const updateCart = (guitar) => {
    if (!cart.includes(guitar)) {
      setCart(prev => [...prev, guitar]);
    }
  };

  return (
    <div className='homepage-container'>

      <div className='sorting'>
        <button className='form-button' onClick={() => navigate("/form")}>
          Go to Form Page
        </button>

        <div className='sort-by'>
          <select className='sort' onChange={e => sortGuitars(e.target.value)}>
            <option value="">sort items</option>
            <option value="name">by name</option>
            <option value="year">by year</option>
            <option value="price">by price</option>
            <option value="amount">by amount</option>
          </select>
        </div>

        <div className='num-in-cart'>
          <span className='cart-number'>number of items in the cart: {counter}</span>
        </div>
      </div>

      <div className='website-content'>
        {guitars.map(guitar => (
          <GuitarCard
            key={guitar.name}
            guitar={guitar}
            updateCart={updateCart}
            onAddToCart={() => setCounter(c => c + 1)}
            setSum={setSum}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;