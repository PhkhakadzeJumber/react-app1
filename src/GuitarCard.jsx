import React from 'react';
import './guitars.css'

function GuitarCard({guitar}) {

  return (

    <div className='guitar'>

    <div className='guitar-image'>
      <img src={guitar.image} alt={guitar.name} />
    </div>

    <div className='guitar-name'>
      <h1>{guitar.name}</h1>
    </div>

    <div className='guitar-description'>

      <div className='guitar-year'>
        <p>year: {guitar.year}</p>
      </div>

      <div className='guitar-price'>
        <p>price: {guitar.price}</p>
      </div>

      <div className='guitar-amount'>
        <p>amount: {guitar.amount}</p>
      </div>

      <div className='guitar-buttons'>
        <button className='guitar-button'>Pay Now</button>
        <button className='guitar-button'> Add to cart</button>
      </div>

    </div>

    </div>
      
  );

}

export default GuitarCard