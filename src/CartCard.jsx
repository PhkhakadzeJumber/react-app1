import React from 'react';
import './guitars.css'

function CartCard({cartItem}) {

  return (
    
    <div className='guitar'>

    <div className='guitar-image'>
      <img src={cartItem.image} alt={cartItem.name} />
    </div>

    <div className='guitar-name'>
      <h1>{cartItem.name}</h1>
    </div>

    <div className='guitar-description'>

      <div className='guitar-year'>
        <p>year: {cartItem.year}</p>
      </div>

      <div className='guitar-price'>
        <p>price: {cartItem.price}</p>
      </div>

      <div className='guitar-amount'>
        <p>amount: {cartItem.amount}</p>
      </div>

    </div>

    </div>

  );

}

export default CartCard