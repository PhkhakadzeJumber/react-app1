import React from 'react';
import Toggle from './toggle';
import './otherPages.css';


function page2() {

  return (

    <div className='container'>

      <div className='diff-settings'>

        <div className='line'>
          <text className='settings-text'> account </text>
          <button className='switch'>switch</button>
        </div>

        <div className='line'>
          <text className='settings-text' > mode switch</text>
          <Toggle />
        </div>

        <div className='line'>
          <text className='settings-text'> add some profile info </text>
          <button className='add-profile'>add</button>
        </div>

        <div className='line'>
          <text className='settings-text'> language </text>
          <select>
            <option>georgian</option>
            <option>english</option>
            <option>russian</option>
            <option>german</option>
            <option>french</option>
            <option>mandarin</option>
          </select>
        </div>

      </div>

      <div className='about'>
        <div className='about-text'>about us:</div>
        <div className='about-text'>you can find us on every main social media. </div>
        <div className='about-text'>you can also contact us. Our contact info: +995-phoneNumber.</div>
      </div>
    
    </div>

  );

}

export default page2