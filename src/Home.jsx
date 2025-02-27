import React from 'react';
import GuitarCard from './GuitarCard';

import flyingV from './assets/flyingV.jpg';
import lesPaul from './assets/lesPaul.jpg';
import Fender from './assets/fender.jpg';
import Explorer from './assets/explorer.jpg';
import ESP_LTD from './assets/ESP-LTD.jpg';
import rhoadsV from './assets/rhoadsV.jpg';
import Telecaster from './assets/telecaster.jpg';
import Ibanez from './assets/ibanez.jpg';
import acoustic from './assets/acoustic.jpg';

function Home() {

  const guitar1 = {image: flyingV, name: "flyingV", year: 1980, price: 2000, amount: 50};
  const guitar2 = {image: lesPaul, name: "lesPaul", year: 1990, price: 3000, amount: 30};
  const guitar3 = {image: Fender, name: "fender", year: 1970, price: 1000, amount: 70};
  const guitar4 = {image: Explorer, name: "explorer", year: 1985, price: 2500, amount: 20};
  const guitar5 = {image: ESP_LTD, name: "ESP_LTD", year: 2000, price: 500, amount: 100};
  const guitar6 = {image: rhoadsV, name: "rhoadsV", year: 2005, price: 4000, amount: 5};
  const guitar7 = {image: Telecaster, name: "telecaster", year: 1975, price: 1500, amount: 90};
  const guitar8 = {image: Ibanez, name: "ibanez", year: 1992, price: 3500, amount: 40};
  const guitar9 = {image: acoustic, name: "acoustic", year: 2020, price: 200, amount: 200};

  const guitars = [guitar1, guitar2, guitar3, guitar4, guitar5, guitar6, guitar7, guitar8, guitar9];

  console.log("Guitars array:", guitars);

  return (

  <div className='homepage-container'>

    <div className='sorting'> 

      <div className='sort-by'>
        <select>
          <option>sort items</option>
          <option>by name</option>
          <option>by year</option>
          <option>by price</option>
          <option>by amount</option>
        </select>
      </div>

      <div className='num-in-cart'>
        number of items in the cart:<span className='num-of-items'>0</span>
      </div>

    </div>

    <div className='website-content'> 
      <div className='first-col'>
      {guitars.filter((_, index) => index % 3 == 0).map((guitar) => (<GuitarCard key={guitar.name} guitar={guitar} /> ))}
      </div>
      <div className='second-col'>
      {guitars.filter((_, index) => index % 3 == 1).map((guitar) => (<GuitarCard key={guitar.name} guitar={guitar} /> ))} 
      </div>
      <div className='third-col'>
      {guitars.filter((_, index) => index % 3 == 2).map((guitar) => (<GuitarCard key={guitar.name} guitar={guitar} /> ))}
      </div>
    </div>
  
  </div>
   

  );

}

export default Home