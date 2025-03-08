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
        
      </div>
    
    </div>

  );

}

export default page1