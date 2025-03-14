import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar, faSearch, faShoppingCart, faPlusSquare, faHistory, faCog } from '@fortawesome/free-solid-svg-icons';

function Navbar({searchQuery, setSearchQuery}) {

  const style1 = {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'};

  return (

    <div className='nav-bar'>

      <div className='header'>

        <div className='left-section'>

          <Link to="/">
            <button className='website-name'>
              <FontAwesomeIcon icon={faGuitar} size='3x' />
              <h1 className='name-text'>GuitarStore</h1>
            </button>
          </Link>

        </div>
    
        <div className='search'>
    
        <input className='search-bar' type='text' placeholder='Search' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />  
    
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
    
        </div>
    
        <div className='right-section'>

        <Link to="/LoginSignup"> 
          <div className="profile">
            profile
          </div>
        </Link>
    
        </div>
    
      </div>
    
      <div className='side-bar'>

        <Link to="/page1">
          <div className='side-bar-p1'>
            <button className='btn' style={style1}> 
            <FontAwesomeIcon icon={faShoppingCart} size='2x' />
            cart </button>
          </div>
        </Link>
    
        <div className='side-bar-p2'>
          <button className='btn' style={style1}> 
          <FontAwesomeIcon icon={faPlusSquare} size='2x' />
          create </button>
        </div>
    
        <div className='side-bar-p3'>
          <button className='btn' style={style1}> 
          <FontAwesomeIcon icon={faHistory} size='2x' />
          history </button>
        </div>

        <Link to="/page2">
          <div className='side-bar-p4'>
            <button className='btn' style={style1}> 
            <FontAwesomeIcon icon={faCog} size='2x' />
            settings </button>
          </div>
        </Link>
          
      </div>
    </div>

  );







}

export default Navbar