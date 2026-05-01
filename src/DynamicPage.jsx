import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./dynamic.css";

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
  { image: flyingV,    name: "flyingV",    year: 1980, price: 2000, amount: 50  },
  { image: lesPaul,    name: "lesPaul",    year: 1990, price: 3000, amount: 30  },
  { image: Fender,     name: "fender",     year: 1970, price: 1000, amount: 70  },
  { image: Explorer,   name: "explorer",   year: 1985, price: 2500, amount: 20  },
  { image: ESP_LTD,    name: "ESP_LTD",    year: 2000, price: 500,  amount: 100 },
  { image: rhoadsV,    name: "rhoadsV",    year: 2005, price: 4000, amount: 5   },
  { image: Telecaster, name: "telecaster", year: 1975, price: 1500, amount: 90  },
  { image: Ibanez,     name: "ibanez",     year: 1992, price: 3500, amount: 40  },
  { image: acoustic,   name: "acoustic",   year: 2020, price: 200,  amount: 200 },
];

function DynamicPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const guitar = og_guitars.find(g => g.name === id);

  if (!guitar) return <div className="dynamic-container"><h1>Guitar not found</h1></div>;

  return (
    <div className="dynamic-container">
      <button className="dynamic-back" onClick={() => navigate(-1)}>← Back</button>
      <img src={guitar.image} alt={guitar.name} className="dynamic-image" />
      <h1>{guitar.name}</h1>
      <p>Year: {guitar.year}</p>
      <p>Price: ${guitar.price}</p>
      <p>In stock: {guitar.amount} units</p>
    </div>
  );
}

export default DynamicPage;