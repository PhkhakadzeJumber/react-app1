import React from 'react';
import { useState } from 'react';
import { createGlobalStyle } from "styled-components";

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Layout from './Layout.jsx';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import LoginSignup from './LoginSignup.jsx';
import Pay from './Pay.jsx';
import Congratulations from './congratulations.jsx';

function App() {

    const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: white;
      }
    `;

    const [cart, setCart] = useState([]);
    const [sum, setSum] = useState(0);
 
    return (

    <>

    <GlobalStyle />

    <Router>
      <Routes>
        <Route element={ <Layout/> }> 

          <Route path="/" element={<Home cart={cart} setCart={setCart} setSum={setSum}/>}/>
          <Route path="/page1" element={<Page1 cart={cart} setCart={setCart} sum={sum} setSum={setSum}/>}/>
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/LoginSignup" element={<LoginSignup/>}/>
          <Route path="/Pay" element={<Pay sum={sum}/>}/>
          <Route path="/Congratulations" element={<Congratulations cart={cart} setCart={setCart} sum={sum} setSum={setSum}/>}/>

        </Route>
      </Routes>
    </Router>

    </>

    );

}

export default App
