import React from 'react';
import './otherPages.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Image from './assets/2pic.png';
import myAudio from './assets/audio.mp3';

function congratulations({cart, setCart, sum, setSum}) {

    useEffect(() => {
            document.body.classList.add("body-background");
            document.body.style.backgroundImage = `url('${Image}')`;

            const audio = new Audio(myAudio);
            audio.volume = 0.1;
            audio.play();
    
            return () => {
                document.body.classList.remove("body-background");
                document.body.style.backgroundImage = "";
                audio.pause();
                audio.currentTime = 0;
            };
        
        }, []);

    const returnHome = () => {
        setCart([]);
        setSum(0);
        console.log("cart", cart);
        console.log("sum", sum);
    }

    return (
        <div className='congrats-page'>
            <h1>Congratulations!</h1>
            <h2>you have successfully purchased a new guitar!</h2>
            <Link to='/'>
                <button className='go-home' onClick={returnHome}>return to HomePage</button>
            </Link>
        </div>
    );

}

export default congratulations