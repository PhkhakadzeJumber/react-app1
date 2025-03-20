import React from 'react';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faQrcode} from '@fortawesome/free-solid-svg-icons';

import Image from './assets/wallpaper.jpg';

function Pay() {

    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const shipping = 100;

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.height = '100vh';
        document.body.style.backgroundImage = `url('${Image}')`;
        document.body.style.backgroundSize = '1520px 675px';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundColor = 'black';
        
        const date = new Date();
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString().slice(-2)}`;
        const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
        setCurrentDate(formattedDate);
        setCurrentTime(formattedTime);

        return () => {
          document.body.style.background = '';
        };
    
    }, []);

    const location = useLocation();
    const sum  = location.state || {};
    
    console.log(location.state);
    console.log(sum);

    return (
        
        <div className='pay-page'>
            <div className='payment-document'>
                <h1>payment document</h1>
                <span>date - {currentDate}</span>
                <span>time - {currentTime}</span>
                <span>ID - 606012345</span>
                <span>shipping - 100$</span>
                <span>tax - 5% = {sum / 20}</span>
                <span>total - {shipping + sum}$</span>
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