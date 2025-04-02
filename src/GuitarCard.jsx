import React from 'react';
import './guitars.css'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faHeart, faThumbsUp, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';

function GuitarCard({guitar, updateCart, onAddToCart, setSum}) {

  const handleClick = () => {
    onAddToCart()
    updateCart(guitar)
  }

  const setPrice = () => setSum(guitar.price);

  return (

    <div className='guitar'>

      <div className='reactive-buttons'>
        <FontAwesomeIcon icon={faFire} size='2x' className='fire-button'/>
        <FontAwesomeIcon icon={faHeart} size='2x' className='love-button'/>
        <FontAwesomeIcon icon={faThumbsUp} size='2x' className='like-button'/>
        <FontAwesomeIcon icon={faThumbsDown} size='2x' className='dislike-button'/>
        <FontAwesomeIcon icon={faTrash} size='2x' className='trash-button'/>
      </div>

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
        <p>price: {guitar.price}$</p>
      </div>

      <div className='guitar-amount'>
        <p>amount: {guitar.amount} units</p>
      </div>

      <div className='guitar-buttons'>
        <Link to='/Pay'>
          <button className='guitar-button' onClick={setPrice}>Pay Now</button>
        </Link>
        <button className='guitar-button' onClick={handleClick}> Add to cart</button>
      </div>

    </div>

    </div>
      
  );

}

export default GuitarCard