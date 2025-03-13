import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faQrcode} from '@fortawesome/free-solid-svg-icons';

function Pay() {

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.height = '100vh';
        document.body.style.background = 'linear-gradient(#2A00B7, #42006C)';
        
        return () => {
          document.body.style.background = '';
        };
    
    }, []);

    return (
        
        <div className='pay-page'>
            <div className='payment-document'>
                <h1>payment document</h1>
                <span>date</span>
                <span>time</span>
                <span>id</span>
                <span>shipping</span>
                <span>total</span>
                <Link to='/'>
                    <button className='go-home'>return to HomePage</button>
                </Link>
            </div>

            <div className='small-container'>
                <button className='pay-choice'>
                    <FontAwesomeIcon icon={faCreditCard} size='2x'/>
                    <h2 className='pay-text'>by card</h2>
                </button>
                <button className='pay-choice'>
                    <FontAwesomeIcon icon={faWallet} size='2x'/>
                    <h2 className='pay-text'>by cash</h2>
                </button>
                <button className='pay-choice'>
                    <FontAwesomeIcon icon={faQrcode} size='3x'/>
                    <h2 className='pay-text'>by QR</h2>
                </button>
            </div>
        </div>

    );


}

export default Pay