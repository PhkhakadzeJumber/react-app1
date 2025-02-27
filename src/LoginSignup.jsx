import React from 'react';
import './otherPages.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function LoginSignup() {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.height = '100vh';
    document.body.style.background = 'linear-gradient(#2A00B7, #42006C)';

    return () => {
      document.body.style.background = '';
    };

  }, []);

  return (

    <div className='sign-in-container'>

      <div className='sign-in-header'>
        <div className='text'>
          Sign Up
        </div>

        <div className='underline'> </div>
      </div>

      <div className='inputs'>

      <div className='input'>
        <FontAwesomeIcon icon={faUser} />
        <input type='text' placeholder='Name' />
      </div>

      <div className='input'>
        <FontAwesomeIcon icon={faEnvelope} />
        <input type='email' placeholder='email' />
      </div>

      <div className='input'>
        <FontAwesomeIcon icon={faLock} />
        <input type='password' placeholder='password' />
      </div>

      </div>

      <div className='forgot'> 
        <span> forgot Password?  </span> 
      </div>

      <div className='submit-choices'>
        
        <Link to='/'>
        <div className='submit'> Sign Up</div>
        </Link>

        <div className='submit'> Login </div>

      </div>

    </div>

  );


}

export default LoginSignup