import React from 'react';
import './HomeCard2.scss';
import {Logo, Card2} from '../../utils/images';
import {VscPass} from 'react-icons/vsc';

const HomeCard2 = () => {
  return (
    <div className="homecard2">
        <div className="homecard2__info">
            <h1>Special Package For Personal Event</h1>
            <p><VscPass/> Up to 15% discount</p>
            <p><VscPass/> Wedding, Birthday, Personal Photoshot</p>
            <p><VscPass/> Special Effect Editing Available</p>
            <button>Book Now</button>
        </div>
        
        <div className="homecard2__img">
            <img src={Card2} alt="" />
        </div>
    </div>
  )
}

export default HomeCard2