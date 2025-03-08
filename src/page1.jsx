import React from 'react';
import './otherPages.css';
import CartCard from './cartCard';
import { useLocation } from 'react-router-dom';  

function page1({cart}) {
  
  return (

    <div className='container'>
      
      <div className='cart-page'>
        <button className='clear-cart'>clear cart</button>
        <button className='delete-item'>delete item</button>
        <button className='buy-item'>buy all</button>
        <button className='buy-item'>buy item</button>
      </div>

      <div className='cart-items'>
        <div className='first-col'>
        {cart.filter((_, index) => index % 3 == 0).map((item) => (<CartCard key={item.name} cartItem={item} />))}
        </div>
        <div className='second-col'>
        {cart.filter((_, index) => index % 3 == 1).map((item) => (<CartCard key={item.name} cartItem={item} />))} 
        </div>
        <div className='third-col'>
        {cart.filter((_, index) => index % 3 == 2).map((item) => (<CartCard key={item.name} cartItem={item} />))}
        </div>
      </div>
    
    </div>

  );

}

export default page1