import React from 'react';
import './HomeCard.scss';
import {Logo, Card1} from '../../utils/images';
import {VscPassFilled} from 'react-icons/vsc';

const HomeCard = () => {
  return (
    <div className="homecard">
        <div className="homecard__img">
            <img src={Card1} alt="" />
        </div>

        <div className="homecard__info">
            <h1>Special Package For Corporate Event</h1>
            <p><VscPassFilled/> Up to 25% discount</p>
            <p><VscPassFilled/> 8k Video Available</p>
            <p><VscPassFilled/> Special Effect Editing Available</p>
            <button>Book Now</button>
        </div>
    </div>
  )
}

export default HomeCard