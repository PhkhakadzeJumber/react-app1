import React, { useState } from 'react';
import './guitars.css'

function CartCard({cartItem, indexes, setIndexes}) {

  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
    if(!indexes.includes(cartItem.name))
      indexes.push(cartItem.name);
  }

  return (
    
    <div className={`guitar ${isSelected ? "selected" : ""}`}>

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

      <button className='select-button' onClick={handleSelect}>select</button>

    </div>

    </div>

  );

}

export default CartCard