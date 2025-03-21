import React from 'react';
import './otherPages.css';
import CartCard from './cartCard';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function page1({cart, setCart, sum, setSum}) {

  const navigate = useNavigate();
  const [indexes, setIndexes] = useState([]);

  const clearCart = () => setCart([]);
  const deleteItems = () => {
    const filteredCart = cart.filter((item) => !indexes.some((name) => name === item.name)); 
    setIndexes([]); 
    setCart(filteredCart);  
  }

  const buyItems = () => {
    const filteredCart = cart.filter((item) => indexes.some((name) => name === item.name)); 
    const s = filteredCart.reduce((acc, item) => acc + item.price, 0);
    setSum(s);
    deleteItems();
    navigate("/Pay");
  }

  const buyAll = () => {
    const s = cart.reduce((acc, item) => acc + item.price, 0);
    setSum(s);
    clearCart();
    navigate("/Pay");
  }

  console.log("total price:", sum);
  console.log("indexes array:", indexes);
  console.log("cart array:", cart);

  return (

    <div className='container'>
      
      <div className='cart-page'>
        <button className='clear-cart' onClick={clearCart}>clear cart</button>
        <button className='delete-item' onClick={deleteItems}>delete item</button>
        <button className='buy-item' onClick={buyAll}>buy all</button>
        <button className='buy-item' onClick={buyItems}>buy item</button>
      </div>

      <div className='cart-items'>
        <div className='first-col'>
        {cart.filter((_, index) => index % 3 == 0).map((item) => (<CartCard key={item.name} cartItem={item} indexes={indexes} setIndexes={setIndexes} />))}
        </div>
        <div className='second-col'>
        {cart.filter((_, index) => index % 3 == 1).map((item) => (<CartCard key={item.name} cartItem={item} indexes={indexes} setIndexes={setIndexes} />))} 
        </div>
        <div className='third-col'>
        {cart.filter((_, index) => index % 3 == 2).map((item) => (<CartCard key={item.name} cartItem={item} indexes={indexes} setIndexes={setIndexes} />))}
        </div>
      </div>
    
    </div>

  );

}

export default page1