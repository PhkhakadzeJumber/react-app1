import React from 'react';
import { useState } from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Layout from './Layout.jsx';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import LoginSignup from './LoginSignup.jsx';
import Pay from './Pay.jsx';
import Congratulations from './Congratulations.jsx';

function App() {

    const [cart, setCart] = useState([]);
 
    return (

    <Router>
      <Routes>
        <Route element={ <Layout/> }> 

          <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
          <Route path="/page1" element={<Page1 cart={cart} setCart={setCart}/>}/>
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/LoginSignup" element={<LoginSignup/>}/>
          <Route path="/Pay" element={<Pay/>}/>
          <Route path="/Congratulations" element={<Congratulations/>}/>

        </Route>
      </Routes>
    </Router>

    );

}

export default App
